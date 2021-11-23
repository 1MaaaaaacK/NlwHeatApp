import React from 'react';

import { View } from 'react-native';
import {Button} from '../Button'
import { COLORS } from '../../theme';

import { styles } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';


export function SignInBox(){
  const { signIn, isSigningIn } = useAuth()


  return (
    <View style={styles.container}>
      <Button 
        title="Entrar com GitHub" 
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />

    </View>
  );
}