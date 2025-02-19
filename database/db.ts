// import * as SQLite from 'expo-sqlite';
//
// // Open the database using openDatabaseSync
// const db = SQLite.openDatabase('bread.db');
//
// // Define types for your data
// type Store = {
//     id?: number;
//     name: string;
//     location: string;
// };
//
// type BreadInventory = {
//     id?: number;
//     store_id: number;
//     type: string;
//     quantity: number;
//     price: number;
//     date: string;
// };
//
// type Payment = {
//     id?: number;
//     store_id: number;
//     amount: number;
//     timing: string;
//     date: string;
// };
//
// type Return = {
//     id?: number;
//     store_id: number;
//     type: string;
//     quantity: number;
//     date: string;
// };
//
// // Initialize tables
// const initDatabase = async () => {
//     try {
//         // Enable foreign key support
//         await db.execAsync([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }]);
//
//         // Create Stores table
//         await db.execAsync([
//             {
//                 sql: `CREATE TABLE IF NOT EXISTS Stores (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           name TEXT NOT NULL,
//           location TEXT NOT NULL
//         );`,
//                 args: [],
//             },
//         ]);
//
//         // Create BreadInventory table
//         await db.execAsync([
//             {
//                 sql: `CREATE TABLE IF NOT EXISTS BreadInventory (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           store_id INTEGER NOT NULL,
//           type TEXT NOT NULL,
//           quantity INTEGER NOT NULL,
//           price REAL NOT NULL,
//           date TEXT NOT NULL,
//           FOREIGN KEY (store_id) REFERENCES Stores(id)
//         );`,
//                 args: [],
//             },
//         ]);
//
//         // Create Payments table
//         await db.execAsync([
//             {
//                 sql: `CREATE TABLE IF NOT EXISTS Payments (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           store_id INTEGER NOT NULL,
//           amount REAL NOT NULL,
//           timing TEXT NOT NULL,
//           date TEXT NOT NULL,
//           FOREIGN KEY (store_id) REFERENCES Stores(id)
//         );`,
//                 args: [],
//             },
//         ]);
//
//         // Create Returns table
//         await db.execAsync([
//             {
//                 sql: `CREATE TABLE IF NOT EXISTS Returns (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           store_id INTEGER NOT NULL,
//           type TEXT NOT NULL,
//           quantity INTEGER NOT NULL,
//           date TEXT NOT NULL,
//           FOREIGN KEY (store_id) REFERENCES Stores(id)
//         );`,
//                 args: [],
//             },
//         ]);
//     } catch (error) {
//         console.error('Error initializing database:', error);
//     }
// };
//
// // Add a store
// const addStore = async (store: Store): Promise<number> => {
//     try {
//         const result = await db.runAsync(
//             'INSERT INTO Stores (name, location) VALUES (?, ?);',
//             [store.name, store.location]
//         );
//         return result.lastInsertRowId as number;
//     } catch (error) {
//         console.error('Error adding store:', error);
//         throw error;
//     }
// };
//
// // Fetch all stores
// const fetchStores = async (): Promise<Store[]> => {
//     try {
//         const result = await db.getAllAsync<Store>('SELECT * FROM Stores;');
//         return result;
//     } catch (error) {
//         console.error('Error fetching stores:', error);
//         throw error;
//     }
// };
//
// // Add bread inventory
// const addBreadInventory = async (inventory: BreadInventory): Promise<number> => {
//     try {
//         const result = await db.runAsync(
//             'INSERT INTO BreadInventory (store_id, type, quantity, price, date) VALUES (?, ?, ?, ?, ?);',
//             [inventory.store_id, inventory.type, inventory.quantity, inventory.price, inventory.date]
//         );
//         return result.lastInsertRowId as number;
//     } catch (error) {
//         console.error('Error adding bread inventory:', error);
//         throw error;
//     }
// };
//
// // Fetch bread inventory for a store
// const fetchBreadInventory = async (storeId: number): Promise<BreadInventory[]> => {
//     try {
//         const result = await db.getAllAsync<BreadInventory>(
//             'SELECT * FROM BreadInventory WHERE store_id = ?;',
//             [storeId]
//         );
//         return result;
//     } catch (error) {
//         console.error('Error fetching bread inventory:', error);
//         throw error;
//     }
// };
//
// // Add a payment
// const addPayment = async (payment: Payment): Promise<number> => {
//     try {
//         const result = await db.runAsync(
//             'INSERT INTO Payments (store_id, amount, timing, date) VALUES (?, ?, ?, ?);',
//             [payment.store_id, payment.amount, payment.timing, payment.date]
//         );
//         return result.lastInsertRowId as number;
//     } catch (error) {
//         console.error('Error adding payment:', error);
//         throw error;
//     }
// };
//
// // Fetch payments for a store
// const fetchPayments = async (storeId: number): Promise<Payment[]> => {
//     try {
//         const result = await db.getAllAsync<Payment>(
//             'SELECT * FROM Payments WHERE store_id = ?;',
//             [storeId]
//         );
//         return result;
//     } catch (error) {
//         console.error('Error fetching payments:', error);
//         throw error;
//     }
// };
//
// // Add a return
// const addReturn = async (returnItem: Return): Promise<number> => {
//     try {
//         const result = await db.runAsync(
//             'INSERT INTO Returns (store_id, type, quantity, date) VALUES (?, ?, ?, ?);',
//             [returnItem.store_id, returnItem.type, returnItem.quantity, returnItem.date]
//         );
//         return result.lastInsertRowId as number;
//     } catch (error) {
//         console.error('Error adding return:', error);
//         throw error;
//     }
// };
//
// // Fetch returns for a store
// const fetchReturns = async (storeId: number): Promise<Return[]> => {
//     try {
//         const result = await db.getAllAsync<Return>(
//             'SELECT * FROM Returns WHERE store_id = ?;',
//             [storeId]
//         );
//         return result;
//     } catch (error) {
//         console.error('Error fetching returns:', error);
//         throw error;
//     }
// };
//
// export {
//     initDatabase,
//     addStore,
//     fetchStores,
//     addBreadInventory,
//     fetchBreadInventory,
//     addPayment,
//     fetchPayments,
//     addReturn,
//     fetchReturns,
// };