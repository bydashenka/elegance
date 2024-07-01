const admin = () => {
    const container = document.createElement('div');
    container.className = 'container';

    container.innerHTML = `
        <div class="tables-container">
            <h2>Список таблиц в базе данных</h2>
            <div id="tablesList"></div>
        </div>
    `;

    const loadTables = async () => {
        try {
            const response = await fetch('http://localhost/elegance/getTables.php');
            if (!response.ok) throw new Error('Network response was not ok');
            const tables = await response.json();

            const tablesList = container.querySelector('#tablesList');
            tablesList.innerHTML = '';

            for (const table of tables) {
                const tableContainer = document.createElement('div');
                tableContainer.className = 'table-container';
                tableContainer.innerHTML = `
                    <h3>${table}</h3>
                    <div class="records-table-container" id="records-${table}"></div>
                    <form id="addRecordForm-${table}">
                        <h4>Добавить запись</h4>
                        <div id="addRecordFields-${table}"></div>
                        <button type="submit">Добавить</button>
                    </form>
                `;
                tablesList.appendChild(tableContainer);

                const fields = await loadFields(table);
                const records = await loadRecords(table);
                const recordsContainer = tableContainer.querySelector(`#records-${table}`);
                const addRecordFields = tableContainer.querySelector(`#addRecordFields-${table}`);

                fields.forEach(field => {
                    if (field.toLowerCase() !== 'id') { // Пропустить поле 'id' для ввода
                        const input = document.createElement('input');
                        input.placeholder = field;
                        input.name = field;
                        addRecordFields.appendChild(input);
                    }
                });

                const addRecordForm = tableContainer.querySelector(`#addRecordForm-${table}`);
                addRecordForm.addEventListener('submit', async (event) => {
                    event.preventDefault();
                    const formData = new FormData(addRecordForm);
                    const newRecord = {};
                    formData.forEach((value, key) => {
                        newRecord[key] = value;
                    });
                    await addRecord(table, newRecord);
                    await loadTables(); // Перезагрузить таблицы после добавления записи
                });

                if (records.length > 0) {
                    const tableElement = document.createElement('table');
                    tableElement.className = 'records-table';

                    const headerRow = document.createElement('tr');
                    fields.forEach(field => {
                        const headerCell = document.createElement('th');
                        headerCell.textContent = field;
                        headerRow.appendChild(headerCell);
                    });
                    headerRow.appendChild(document.createElement('th')); // Пустой заголовок для кнопки удаления
                    tableElement.appendChild(headerRow);

                    records.forEach(record => {
                        const row = document.createElement('tr');
                        fields.forEach(field => {
                            const cell = document.createElement('td');
                            cell.textContent = record[field] || '';
                            cell.className = 'editable';
                            cell.setAttribute('contenteditable', 'true');
                            cell.addEventListener('blur', async () => {
                                const newValue = cell.textContent;
                                await updateRecord(table, record, field, newValue);
                            });
                            row.appendChild(cell);
                        });

                        const deleteCell = document.createElement('td');
                        const deleteButton = document.createElement('button');
                        deleteButton.textContent = 'Удалить';
                        deleteButton.addEventListener('click', async () => {
                            await deleteRecord(table, record);
                            await loadTables(); // Перезагрузить таблицы после удаления записи
                        });
                        deleteCell.appendChild(deleteButton);
                        row.appendChild(deleteCell);

                        tableElement.appendChild(row);
                    });

                    recordsContainer.appendChild(tableElement);
                } else {
                    recordsContainer.textContent = 'Нет записей';
                }
            }
        } catch (error) {
            console.error('Ошибка при загрузке таблиц:', error);
        }
    };

    const loadFields = async (table) => {
        try {
            const response = await fetch(`http://localhost/elegance/getFields.php?table=${table}`);
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error(`Ошибка при загрузке полей для таблицы ${table}:`, error);
            return [];
        }
    };

    const loadRecords = async (table) => {
        try {
            const response = await fetch(`http://localhost/elegance/getRecords.php?table=${table}`);
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error(`Ошибка при загрузке записей для таблицы ${table}:`, error);
            return [];
        }
    };

    const updateRecord = async (table, record, field, newValue) => {
        const primaryKeyField = Object.keys(record)[0];
        const primaryKeyValue = record[primaryKeyField];

        const data = {
            table: table,
            primaryKeyField: primaryKeyField,
            primaryKeyValue: primaryKeyValue,
            field: field,
            newValue: newValue
        };

        try {
            const response = await fetch('http://localhost/elegance/updateRecord.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) throw new Error('Network response was not ok');
            const responseData = await response.json();
            if (responseData.success) {
                console.log('Запись успешно обновлена');
            } else {
                console.error('Ошибка при обновлении записи:', responseData.message);
            }
        } catch (error) {
            console.error('Ошибка при обновлении записи:', error);
        }
    };

    const deleteRecord = async (table, record) => {
        const primaryKeyField = Object.keys(record)[0];
        const primaryKeyValue = record[primaryKeyField];
    
        const data = {
            table: table,
            primaryKeyField: primaryKeyField,
            primaryKeyValue: primaryKeyValue
        };
    
        try {
            const response = await fetch('http://localhost/elegance/deleteRecord.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const responseData = await response.json();
            if (responseData.success) {
                console.log('Запись успешно удалена');
            } else {
                console.error('Ошибка при удалении записи:', responseData.message);
            }
        } catch (error) {
            console.error('Ошибка при удалении записи:', error.message);
        }
    };
    
    

    const addRecord = async (table, record) => {
        const data = {
            table: table,
            record: record
        };

        try {
            console.log('Sending add request with data:', data); // Логируем данные, которые отправляются
            const response = await fetch('http://localhost/elegance/addRecord.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) throw new Error('Network response was not ok');
            const responseData = await response.json();
            if (responseData.success) {
                console.log('Запись успешно добавлена');
            } else {
                console.error('Ошибка при добавлении записи:', responseData.message);
            }
        } catch (error) {
            console.error('Ошибка при добавлении записи:', error);
        }
    };

    loadTables();
    return container;
};


export default admin;