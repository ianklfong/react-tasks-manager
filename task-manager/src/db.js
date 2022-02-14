import React, { useState, useEffect } from 'react';
// //database
import { db } from './firebase-config';
import { collection, doc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'

export const testCollectionRef = collection(db, 'task')
export const listCollectionRef = collection(db, 'list')

// export function Database() {
//     const [test, setTest] = useState([]);
//     const [newTitle, setNewTitle] = useState('')
//     const [newNotes, setNewNotes] = useState('')

//     //data retrieve
//     useEffect(() => {
//         const getTest = async () => {
//             const data = await getDocs(testCollectionRef);
//             setTest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//         }

//         getTest();
//     }, [])

//     //sending data to db 
//     const createTest = async () => {
//         await addDoc(testCollectionRef, { title: newTitle, notes: newNotes });
//     }
//     //updating data
//     // const updateTest = async (id, dataWant2bUpdate) => {
//     //     const testDoc = doc(db, "task", id)
//     //     const newFields = {dataWant2bUpdate: previousData/newInput}
//     //     await updateDoc( testDoc, newFields)
//     // }

//     //delete data
//     const deleteTest = async (id) => {
//         const testDoc = doc(db, "task", id);
//         await deleteDoc(testDoc);
//     }

//     return (
//         <div>
//             <input>
//             </input>
//         </div>
//     )
// }

