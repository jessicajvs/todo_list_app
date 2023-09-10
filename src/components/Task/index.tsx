import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

type Props = {
    name: string;
    onRemove: () => void;
}

export function Task({ name, onRemove }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <TouchableOpacity style={styles.submitButton} onPress={onRemove}>
                <Ionicons name="trash-outline" size={15} color="#bbbbbb" />
            </TouchableOpacity>
        </View>
    )
}