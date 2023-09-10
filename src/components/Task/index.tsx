import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

type Props = {
    description: string;
    status: string;
    onRemove: () => void;
    onChangeStatus: () => void;
}

export function Task({ description, status, onRemove, onChangeStatus }: Props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.submitButtonStatus} onPress={onChangeStatus}>
                {status == 'completed' &&
                    <AntDesign name="checkcircle" size={20} color="#5E60CE" />
                }
                {status == 'incompleted' &&
                    <IconFontAwesome name="circle-thin" size={20} color="#4EA8DE" />
                }
            </TouchableOpacity>
            {status == 'completed' &&
                <Text style={styles.descriptionCompleted}>{description}</Text>
            }
            {status == 'incompleted' &&
                <Text style={styles.descriptionIncompleted}>{description}</Text>
            }
            <TouchableOpacity style={styles.submitButton} onPress={onRemove}>
                <Ionicons name="trash-outline" size={15} color="#bbbbbb" />
            </TouchableOpacity>
        </View>
    )
}