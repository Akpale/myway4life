import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { MaterialIcons } from '@expo/vector-icons';
import globalesStyles from '../styles/globalesStyles';


const CustomHeaderIcon = (props) => {
  return (
    <HeaderButton
       {...props}
       IconComponent={MaterialIcons}
       iconSize={24}
       color={globalesStyles.white}   
    />
  )
}

export default CustomHeaderIcon
