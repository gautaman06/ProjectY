import React from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../constants/Colors';

interface IInputBoxProps {
  placeHolder?: string;
  keyBoardType?: KeyboardTypeOptions;
  onChange?: () => void;
}

const InputBox = (props: IInputBoxProps) => {
  const { placeHolder = 'Enter value', keyBoardType = 'default' } = props;

  return (
    <TextInput
      style={styles.input}
      keyboardType={keyBoardType}
      placeholder={placeHolder}
      placeholderTextColor={COLORS.mildTextGrey}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 46,
    backgroundColor: COLORS.white,
    border: `1px solid ${COLORS.lightGrey}`,
    borderRadius: 6,
    color: COLORS.black,
    padding: 10,
  },
});

export default InputBox;