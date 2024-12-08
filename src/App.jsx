import React from 'react'
import InventoryManagement from './InventoryManagement'

const App = () => {
  return (
    <div>
      <InventoryManagement/>
    </div>
  )
}

export default App


// // // 'use client'
// // import { useState, useEffect, createContext, useContext } from 'react'
// // import { PlusCircle, Home, History, Search, Menu, Plus, Minus, Trash2, UserPen, CopyPlus, CopyMinus, CopyX } from 'lucide-react'
// // // import Image from 'next/image'

// // // Context
// // const AppContext = createContext(null)

// // // Main componentF
// // export default function HMKManLanding() {
// //   const [items, setItems] = useState(JSON.parse(localStorage.getItem("hmkManItems")) ? JSON.parse(localStorage.getItem("hmkManItems")) :  [])
// //   const [activeTab, setActiveTab] = useState('home')
// //   const [searchTerm, setSearchTerm] = useState('')
// //   const [newItem, setNewItem] = useState({})
// //   const [selectedItem, setSelectedItem] = useState(null)


  
// //   // useEffect(() => {
// //   //   try {
// //   //     const storedItems = localStorage.getItem("hmkManItems");
// //   //     if (storedItems){
// //   //       // console.log(storedItems);
// //   //       setItems(JSON.parse(storedItems));
// //   //    }
// //   //   } catch (error) {
// //   //     console.error("Failed to load items from localStorage:", error);
// //   //   }
// //   // }, []);
  
// //   useEffect(() => {
// //     try {
// //       console.log(items);
// //       localStorage.setItem("hmkManItems", JSON.stringify(items));
// //     } catch (error) {
// //       console.error("Failed to save items to localStorage:", error);
// //     }
// //   }, [items]);


// // // ? her aherr er

// //   // useEffect(() => {
// //   //   const storedItems = localStorage.getItem('hmkManItems')
// //   //   if (storedItems) {
// //   //     setItems(JSON.parse(storedItems))
// //   //   }
// //   // }, [])

// //   // useEffect(() => {
// //   //   localStorage.setItem('hmkManItems', JSON.stringify(items))
// //   // }, [items])

// //   const addItem = () => {
// //     if (!newItem.name || !newItem.quantity || !newItem.image) {
// //       alert("Please fill in all fields.");
// //       return;
// //     }

// //     if (newItem.name && newItem.quantity && newItem.image) {
// //       const id = Date.now().toString();
// //       const createdAt = new Date().toISOString();
// //       setItems([...items, {
// //         id,
// //         name: newItem.name,
// //         quantity: Number(newItem.quantity),
// //         sold: 0,
// //         image: newItem.image,
// //         createdAt,
// //         history: [{
// //           action: 'add',
// //           quantity: Number(newItem.quantity),
// //           date: createdAt
// //         }]
// //       }]);
// //       setNewItem({});
// //       setActiveTab('home');
// //     }
// //   };

// //   const updateItemQuantity = (id, amount) => {
// //     setItems(items.map(item => 
// //       item.id === id 
// //         ? { 
// //             ...item, 
// //             quantity: Math.max(0, item.quantity + amount),
// //             history: [
// //               ...item.history,
// //               {
// //                 action: amount > 0 ? 'add' : 'sell',
// //                 quantity: Math.abs(amount),
// //                 date: new Date().toISOString()
// //               }
// //             ]
// //           } 
// //         : item
// //     ));
// //   };

// //   const deleteItem = (id) => {
// //     setItems(items.filter(item => item.id !== id));
// //   };

// //   const filteredItems = items.filter(item => 
// //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   )

// //   return (
// //     <AppContext.Provider value={{ items, setItems, addItem, updateItemQuantity, deleteItem }}>
// //       <div className="bg-gray-100 pb-16 min-h-screen">
// //         {/* Header */}
// //         <header className="flex justify-between items-center bg-white shadow-md p-4">
// //           <h1 className="font-bold text-2xl text-gray-800">
// //           {/* Khawar <span className='text-sm'>Abbas</span> */}
// //           Malik
// //           </h1>
// //           <div className="flex flex-col justify-center items-center mr-4">
// //             <UserPen className="w-6 h-6 text-gray-600"/>
// //             <span className='text-sm'>Malik</span>
// //           </div>
// //         </header>

// //         {/* Search Bar */}
// //         <div className="top-0 z-10 sticky bg-white shadow-md p-4">
// //           <div className="relative">
// //             <Search className="top-1/2 left-3 absolute text-gray-400 transform -translate-y-1/2" />
// //             <input
// //               type="text"
// //               placeholder="Search items..."
// //               className="border-gray-300 py-2 pr-4 pl-10 border rounded-full focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //             />
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <main className="p-4">
// //           {activeTab === 'home' && <ItemList items={filteredItems} />}
// //           {activeTab === 'add' && <AddItemForm newItem={newItem} setNewItem={setNewItem} addItem={addItem} />}
// //           {activeTab === 'history' && <HistoryView items={items} />}
// //         </main>

// //         {/* Footer */}
// //         <footer className="right-0 bottom-0 left-0 fixed border-gray-200 bg-white border-t">
// //           <nav className="flex justify-around">
// //             <button 
// //               className={`flex flex-col items-center p-2 ${activeTab === 'home' ? 'text-blue-500' : 'text-gray-600'}`}
// //               onClick={() => setActiveTab('home')}
// //             >
// //               <Home />
// //               <span className="mt-1 text-xs">Home</span>
// //             </button>
// //             <button 
// //               className={`flex flex-col items-center p-2 ${activeTab === 'add' ? 'text-blue-500' : 'text-gray-600'}`}
// //               onClick={() => setActiveTab('add')}
// //             >
// //               <PlusCircle />
// //               <span className="mt-1 text-xs">Add</span>
// //             </button>
// //             <button 
// //               className={`flex flex-col items-center p-2 ${activeTab === 'history' ? 'text-blue-500' : 'text-gray-600'}`}
// //               onClick={() => setActiveTab('history')}
// //             >
// //               <History />
// //               <span className="mt-1 text-xs">History</span>
// //             </button>
// //           </nav>
// //         </footer>

// //         {/* Dialogs */}
// //         {selectedItem && (
// //           <UpdateQuantityDialog 
// //             item={selectedItem} 
// //             onClose={() => setSelectedItem(null)} 
// //             onUpdate={(quantity, action) => {
// //               updateItemQuantity(selectedItem.id, action === 'add' ? quantity : -quantity);
// //               setSelectedItem(null);
// //             }}
// //           />
// //         )}
// //       </div>
// //     </AppContext.Provider>
// //   )
// // }

// // // Sub-components
// // function ItemList({ items }) {
// //   const { updateItemQuantity, deleteItem } = useContext(AppContext)
// //   const [selectedItem, setSelectedItem] = useState(null)

// //   return (
// //     <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
// //       {items.map(item => (
// //         <div key={item.id} className="bg-white shadow-lg rounded-lg transform transition duration-300 overflow-hidden hover:scale-105">
// //           <div className="relative">
// //             <div className='flex justify-evenly items-center w-full h-[140px]'>
// //             <img src={item.image} alt={item.name} className='rounded-full w-[100px] h-[100px]' />
// //             <div>
// //             <p className="font-bold text-gray-600">Avail Quantity: <span className='text-sm'> {item.quantity} </span></p>
// //             <p className="font-bold text-gray-600">Sold Quantity: <span className='text-sm'>{item.sold}</span></p>
// //             </div>
// //             </div>
// //           </div>
// //           <div className="p-4">
// //             <h2 className="mb-2 font-semibold text-gray-800 text-xl">{item.name}</h2>
// //             <div className="flex justify-between items-center mb-4">
// //               {/* <p className="text-gray-600">Quantity: {item.quantity}</p>
// //               <p className="text-gray-600">Sold: {item.sold}</p> */}
// //             </div>

// // <div className="flex justify-between">
// //   {/* Add Quantity Button */}
// //   <button
// //     className="relative bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white transform transition hover:-translate-y-1 duration-300 ease-in-out group"
// //     onClick={() => setSelectedItem({ ...item, action: 'add' })}
// //   >
// //     <CopyPlus className="w-5 h-5" />
// //     {/* Tooltip */}
// //     <span className="bottom-full left-1/2 absolute bg-gray-700 opacity-0 group-hover:opacity-100 mb-2 px-2 py-1 rounded-xl w-max text-sm text-white transform transition -translate-x-1/2 duration-300">
// //       Add Quantity
// //     </span>
// //   </button>

// //   {/* Sold Quantity Button */}
// //   <button
// //     className="relative bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white transform transition hover:-translate-y-1 duration-300 ease-in-out group"
// //     onClick={() => setSelectedItem({ ...item, action: 'sell' })}
// //   >
// //     <CopyMinus className="w-5 h-5" />
// //     {/* Tooltip */}
// //     <span className="bottom-full left-1/2 absolute bg-gray-700 opacity-0 group-hover:opacity-100 mb-2 px-2 py-1 rounded-xl w-max text-sm text-white transform transition -translate-x-1/2 duration-300">
// //       Sold Quantity
// //     </span>
// //   </button>

// //   {/* Delete Item Button */}
// //   <button
// //     className="relative bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white transform transition hover:-translate-y-1 duration-300 ease-in-out group"
// //     onClick={() => deleteItem(item.id)}
// //   >
// //     <CopyX className="w-5 h-5" />
// //     {/* Tooltip */}
// //     <span className="bottom-full left-1/2 absolute bg-gray-700 opacity-0 group-hover:opacity-100 mb-2 px-2 py-1 rounded-xl w-max text-sm text-white transform transition -translate-x-1/2 duration-300">
// //       Delete Item
// //     </span>
// //   </button>
// // </div>



// //           </div>
// //         </div>
// //       ))}
// //       {selectedItem && (
// //         <UpdateQuantityDialog 
// //           item={selectedItem} 
// //           onClose={() => setSelectedItem(null)} 
// //           onUpdate={(quantity) => {
// //             updateItemQuantity(selectedItem.id, selectedItem.action === 'add' ? quantity : -quantity);
// //             setSelectedItem(null);
// //           }}
// //         />
// //       )}
// //     </div>
// //   )
// // }

// // function AddItemForm({ newItem, setNewItem, addItem }) {
// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0]
// //     if (file) {
// //       const reader = new FileReader()
// //       reader.onloadend = () => {
// //         setNewItem({ ...newItem, image: reader.result })
// //       }
// //       reader.readAsDataURL(file)
// //     }
// //   }

// //   return (
// //     <div className="bg-white shadow-md p-6 rounded-lg">
// //       <h2 className="mb-6 font-semibold text-2xl text-gray-800">Add New Item</h2>
// //       <input
// //         type="text"
// //         placeholder="Item Name"
// //         className="mb-4 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         value={newItem.name || ''}
// //         onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
// //       />
// //       <input
// //         type="number"
// //         placeholder="Quantity"
// //         className="mb-4 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         value={newItem.quantity || ''}
// //         onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
// //       />
// //       <div className="mb-4">
// //         <label htmlFor="image-upload" className="block mb-2 font-medium text-gray-700 text-sm">
// //           Choose Image
// //         </label>
// //         <input
// //           id="image-upload"
// //           type="file"
// //           accept="image/*"
// //           onChange={handleImageChange}
// //           className="file:border-0 file:bg-blue-50 hover:file:bg-blue-100 file:mr-4 file:px-4 file:py-2 file:rounded-full w-full file:font-semibold text-gray-500 text-sm file:text-blue-700 file:text-sm"
// //         />
// //       </div>
// //       {newItem.image && (
// //         <div className="mb-4">
// //           <img src={newItem.image} alt="Preview" width={200} height={200} className="rounded-lg" />
// //         </div>
// //       )}
// //       <button
// //         className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg w-full text-white transform transition hover:-translate-y-1 duration-300 ease-in-out"
// //         onClick={addItem}
// //       >
// //         Add Item
// //       </button>
// //     </div>
// //   )
// // }

// // function HistoryView({ items }) {
// //   const allActions = items.flatMap(item => 
// //     item.history.map(historyItem => ({
// //       ...historyItem,
// //       itemName: item.name,
// //       itemImage: item.image,
// //       itemId: item.id
// //     }))
// //   ).sort((a, b) => new Date(b.date) - new Date(a.date));

// //   return (
// //     <div className="bg-white shadow-md p-6 rounded-lg">
// //       <h2 className="mb-6 font-semibold text-2xl text-gray-800">Action History</h2>
// //       {allActions.map((action, index) => (
// //         <div key={`${action.itemId}-${index}`} className="border-gray-200 mb-6 p-4 border-b last:border-b-0">
// //           <div className="flex items-center mb-4">
// //             <img src={action.itemImage} alt={action.itemName} width={60} height={60} className="mr-4 rounded-lg" />
// //             <div>
// //               <h3 className="font-semibold text-gray-800 text-lg">{action.itemName}</h3>
// //               <p className="text-gray-600 text-sm">Date: {new Date(action.date).toLocaleString()}</p>
// //             </div>
// //           </div>
// //           <div className="flex justify-between text-gray-600 text-sm">
// //             <p>Action: {action.action === 'add' ? 'Added' : 'Sold'}</p>
// //             <p>Quantity: {action.quantity}</p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // function UpdateQuantityDialog({ item, onClose, onUpdate }) {
// //   const [quantity, setQuantity] = useState(1);

// //   return (
// //     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
// //       <div className="bg-white shadow-xl p-6 rounded-lg">
// //         <h2 className="mb-4 font-semibold text-gray-800 text-xl">{item.action === 'add' ? 'Add' : 'Sell'} {item.name}</h2>
// //         <div className="flex items-center mb-6">
// //           <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="bg-gray-200 hover:bg-gray-300 p-2 rounded-l transition duration-300">
// //             <Minus className="w-5 h-5" />
// //           </button>
// //           <input
// //             type="number"
// //             className="p-2 border-t border-b w-20 text-center focus:outline-none"
// //             value={quantity}
// //             onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
// //           />
// //           <button onClick={() => setQuantity(quantity + 1)} className="bg-gray-200 hover:bg-gray-300 p-2 rounded-r transition duration-300">
// //             <Plus className="w-5 h-5" />
// //           </button>
// //         </div>
// //         <div className="flex justify-end space-x-4">
// //           <button onClick={onClose} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition duration-300">Cancel</button>
// //           <button onClick={() => onUpdate(quantity)} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white transition duration-300">Confirm</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





// import React, { useState, useEffect } from 'react';
// import { PlusCircle, Home, History, Search, UserCircle, CopyPlus, CopyMinus, Trash2, Plus, Minus } from 'react-feather';

// const InventoryManagement = () => {
//   const [items, setItems] = useState(() => {
//     const storedItems = localStorage.getItem("inventoryItems");
//     return storedItems ? JSON.parse(storedItems) : [];
//   });
//   const [activeTab, setActiveTab] = useState('home');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [newItem, setNewItem] = useState({});
//   const [selectedItem, setSelectedItem] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("inventoryItems", JSON.stringify(items));
//   }, [items]);

//   const addItem = () => {
//     if (!newItem.name || !newItem.quantity || !newItem.image) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     const id = Date.now().toString();
//     const createdAt = new Date().toISOString();
//     setItems([...items, {
//       id,
//       name: newItem.name,
//       quantity: Number(newItem.quantity),
//       sold: 0,
//       image: newItem.image,
//       createdAt,
//       history: [{
//         action: 'add',
//         quantity: Number(newItem.quantity),
//         date: createdAt
//       }]
//     }]);
//     setNewItem({});
//     setActiveTab('home');
//   };

//   const updateItemQuantity = (id, amount, action) => {
//     setItems(items.map(item =>
//       item.id === id
//         ? {
//             ...item,
//             quantity: action === 'add' ? item.quantity + amount : Math.max(0, item.quantity - amount),
//             sold: action === 'sell' ? item.sold + amount : item.sold,
//             history: [
//               ...item.history,
//               {
//                 action: action,
//                 quantity: amount,
//                 date: new Date().toISOString()
//               }
//             ]
//           }
//         : item
//     ));
//   };

//   const deleteItem = (id) => {
//     setItems(items.filter(item => item.id !== id));
//   };

//   const filteredItems = items.filter(item =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewItem({ ...newItem, image: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const ItemList = ({ items }) => (
//     <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//       {items.map(item => (
//         <div key={item.id} className="bg-white shadow-lg rounded-lg transform transition duration-300 overflow-hidden hover:scale-105">
//           <div className="relative">
//             <div className='flex justify-evenly items-center w-full h-[140px]'>
//               <img src={item.image} alt={item.name} className='rounded-full w-[100px] h-[100px]' />
//               <div>
//                 <p className="font-bold text-gray-600">Avail Quantity: <span className='text-sm'> {item.quantity} </span></p>
//                 <p className="font-bold text-gray-600">Sold Quantity: <span className='text-sm'>{item.sold}</span></p>
//               </div>
//             </div>
//           </div>
//           <div className="p-4">
//             <h2 className="mb-2 font-semibold text-gray-800 text-xl">{item.name}</h2>
//             <div className="flex justify-between">
//               <button
//                 className="relative bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white transform transition hover:-translate-y-1 duration-300 ease-in-out group"
//                 onClick={() => setSelectedItem({ ...item, action: 'add' })}
//               >
//                 <CopyPlus size={20} />
//                 <span className="bottom-full left-1/2 absolute bg-gray-700 opacity-0 group-hover:opacity-100 mb-2 px-2 py-1 rounded-xl w-max text-sm text-white transform transition -translate-x-1/2 duration-300">
//                   Add Quantity
//                 </span>
//               </button>
//               <button
//                 className="relative bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white transform transition hover:-translate-y-1 duration-300 ease-in-out group"
//                 onClick={() => setSelectedItem({ ...item, action: 'sell' })}
//               >
//                 <CopyMinus size={20} />
//                 <span className="bottom-full left-1/2 absolute bg-gray-700 opacity-0 group-hover:opacity-100 mb-2 px-2 py-1 rounded-xl w-max text-sm text-white transform transition -translate-x-1/2 duration-300">
//                   Sold Quantity
//                 </span>
//               </button>
//               <button
//                 className="relative bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white transform transition hover:-translate-y-1 duration-300 ease-in-out group"
//                 onClick={() => deleteItem(item.id)}
//               >
//                 <Trash2 size={20} />
//                 <span className="bottom-full left-1/2 absolute bg-gray-700 opacity-0 group-hover:opacity-100 mb-2 px-2 py-1 rounded-xl w-max text-sm text-white transform transition -translate-x-1/2 duration-300">
//                   Delete Item
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   const AddItemForm = () => (
//     <div className="bg-white shadow-md p-6 rounded-lg">
//       <h2 className="mb-6 font-semibold text-2xl text-gray-800">Add New Item</h2>
//       <input
//         type="text"
//         placeholder="Item Name"
//         className="mb-4 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         value={newItem.name || ''}
//         onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Quantity"
//         className="mb-4 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         value={newItem.quantity || ''}
//         onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
//       />
//       <div className="mb-4">
//         <label htmlFor="image-upload" className="block mb-2 font-medium text-gray-700 text-sm">
//           Choose Image
//         </label>
//         <input
//           id="image-upload"
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="file:border-0 file:bg-blue-50 hover:file:bg-blue-100 file:mr-4 file:px-4 file:py-2 file:rounded-full w-full file:font-semibold text-gray-500 text-sm file:text-blue-700 file:text-sm"
//         />
//       </div>
//       {newItem.image && (
//         <div className="mb-4">
//           <img src={newItem.image} alt="Preview" width={200} height={200} className="rounded-lg" />
//         </div>
//       )}
//       <button
//         className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg w-full text-white transform transition hover:-translate-y-1 duration-300 ease-in-out"
//         onClick={addItem}
//       >
//         Add Item
//       </button>
//     </div>
//   );

//   const HistoryView = () => {
//     const allActions = items.flatMap(item =>
//       item.history.map(historyItem => ({
//         ...historyItem,
//         itemName: item.name,
//         itemImage: item.image,
//         itemId: item.id
//       }))
//     ).sort((a, b) => new Date(b.date) - new Date(a.date));

//     return (
//       <div className="bg-white shadow-md p-6 rounded-lg">
//         <h2 className="mb-6 font-semibold text-2xl text-gray-800">Action History</h2>
//         {allActions.map((action, index) => (
//           <div key={`${action.itemId}-${index}`} className="border-gray-200 mb-6 p-4 border-b last:border-b-0">
//             <div className="flex items-center mb-4">
//               <img src={action.itemImage} alt={action.itemName} width={60} height={60} className="mr-4 rounded-lg" />
//               <div>
//                 <h3 className="font-semibold text-gray-800 text-lg">{action.itemName}</h3>
//                 <p className="text-gray-600 text-sm">Date: {new Date(action.date).toLocaleString()}</p>
//               </div>
//             </div>
//             <div className="flex justify-between text-gray-600 text-sm">
//               <p>Action: {action.action === 'add' ? 'Added' : 'Sold'}</p>
//               <p>Quantity: {action.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const UpdateQuantityDialog = ({ item, onClose, onUpdate }) => {
//     const [quantity, setQuantity] = useState(1);

//     return (
//       <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//         <div className="bg-white shadow-xl p-6 rounded-lg">
//           <h2 className="mb-4 font-semibold text-gray-800 text-xl">{item.action === 'add' ? 'Add' : 'Sell'} {item.name}</h2>
//           <div className="flex items-center mb-6">
//             <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="bg-gray-200 hover:bg-gray-300 p-2 rounded-l transition duration-300">
//               <Minus size={20} />
//             </button>
//             <input
//               type="number"
//               className="p-2 border-t border-b w-20 text-center focus:outline-none"
//               value={quantity}
//               onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
//             />
//             <button onClick={() => setQuantity(quantity + 1)} className="bg-gray-200 hover:bg-gray-300 p-2 rounded-r transition duration-300">
//               <Plus size={20} />
//             </button>
//           </div>
//           <div className="flex justify-end space-x-4">
//             <button onClick={onClose} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition duration-300">Cancel</button>
//             <button onClick={() => onUpdate(quantity)} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white transition duration-300">Confirm</button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="bg-gray-100 pb-16 min-h-screen">
//       {/* Header */}
//       <header className="flex justify-between items-center bg-white shadow-md p-4">
//         <h1 className="font-bold text-2xl text-gray-800">Malik</h1>
//         <div className="flex flex-col justify-center items-center mr-4">
//           <UserCircle size={24} className="text-gray-600" />
//           <span className='text-sm'>Malik</span>
//         </div>
//       </header>

//       {/* Search Bar */}
//       <div className="top-0 z-10 sticky bg-white shadow-md p-4">
//         <div className="relative">
//           <Search className="top-1/2 left-3 absolute text-gray-400 transform -translate-y-1/2" size={20} />
//           <input
//             type="text"
//             placeholder="Search items..."
//             className="border-gray-300 py-2 pr-4 pl-10 border rounded-full focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="p-4">
//         {activeTab === 'home' && <ItemList items={filteredItems} />}
//         {activeTab === 'add' && <AddItemForm />}
//         {activeTab === 'history' && <HistoryView />}
//       </main>

//       {/* Footer */}
//       <footer className="right-0 bottom-0 left-0 fixed border-gray-200 bg-white border-t">
//         <nav className="flex justify-around">
//           <button 
//             className={`flex flex-col items-center p-2 ${activeTab === 'home' ? 'text-blue-500' : 'text-gray-600'}`}
//             onClick={() => setActiveTab('home')}
//           >
//             <Home size={20} />
//             <span className="mt-1 text-xs">Home</span>
//           </button>
//           <button 
//             className={`flex flex-col items-center p-2 ${activeTab === 'add' ? 'text-blue-500' : 'text-gray-600'}`}
//             onClick={() => setActiveTab('add')}
//           >
//             <PlusCircle size={20} />
//             <span className="mt-1 text-xs">Add</span>
//           </button>
//           <button 
//             className={`flex flex-col items-center p-2 ${activeTab === 'history' ? 'text-blue-500' : 'text-gray-600'}`}
//             onClick={() => setActiveTab('history')}
//           >
//             <History size={20} />
//             <span className="mt-1 text-xs">History</span>
//           </button>
//         </nav>
//       </footer>

//       {/* Dialogs */}
//       {selectedItem && (
//         <UpdateQuantityDialog 
//           item={selectedItem} 
//           onClose={() => setSelectedItem(null)} 
//           onUpdate={(quantity) => {
//             updateItemQuantity(selectedItem.id, quantity, selectedItem.action);
//             setSelectedItem(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default InventoryManagement;