import * as firebase from 'firebase'
import { toast } from './toast'
import { resolve } from 'dns'

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

export function getCurrentUser(){
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
            if(user){
                resolve(user)
            } else {
                resolve(null)
            }
            unsubscribe()
        })
    })
}

export async function loginUser(username: string, password: string){
    const email = `${username}@gmail.com`

    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        return res
    }catch (error){
        toast(error.message, 4000)
        return false
    }


    // authenticate with firebase
    // if present, show dashboard
    // if not, show error
}

export async function registerUser(username: string, password: string){
    const email = `${username}@gmail.com`
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error) {
        toast(error.message, 4000)
        return false
    }

}

export function logoutUser(){
    return firebase.auth().signOut()
}