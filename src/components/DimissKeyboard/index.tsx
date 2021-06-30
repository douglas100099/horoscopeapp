import React, { ReactNode } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

interface DimissKeyboardProps {
    children: ReactNode;
}

const DimissKeyboard = ({ children }: DimissKeyboardProps) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
}

export default DimissKeyboard;