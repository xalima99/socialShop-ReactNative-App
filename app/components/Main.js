import React, { useEffect, useState } from "react";
import { AuthNavigator, AppNavigator, MainNavigator } from "./navigation/AppNavigator";
import { useSelector } from "react-redux";
import firebase from '../services/firebase'

export default function Main() {
  const [uid, setuid] = useState('');
  useEffect(() => {
    setuid(firebase.auth().currentUser.uid)
  }, []); 


  if (!uid){
    return <AuthNavigator />;
  }

  return <MainNavigator/>
}
