import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { toast } from './toast'

const config = {
    apiKey: "AIzaSyAXsMdq3h3B0vDLqBAxylCRd50vEakdrLM",
    authDomain: "flixme-mx.firebaseapp.com",
    databaseURL: "https://flixme-mx.firebaseio.com",
    projectId: "flixme-mx",
    storageBucket: "flixme-mx.appspot.com",
    messagingSenderId: "605939818832",
    appId: "1:605939818832:web:2b1d3aae686f78f5374c55",
    measurementId: "G-DLXH9FS4FW"
}

firebase.initializeApp(config)

export async function loginUser(username: string, password: string) {
    const email = `${username}@gmail.com`

    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        return res
    } catch (error) {
        toast(error.message, 4000)
        return false
    }
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@gmail.com`
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error) {
        toast(error.message, 4000)
        return false
    }

}

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                resolve(user)
            } else {
                resolve(null)
            }
            unsubscribe()
        })
    })
}

export function logoutUser() {
    return firebase.auth().signOut()
}