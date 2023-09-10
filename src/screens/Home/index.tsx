import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    FlatList,
    Alert,
    Image
} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Task } from '../../components/Task';
import { ImagesAssets } from '../../assets/ImagesAssets';

import { styles } from './styles';

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskDescription, setTaskDescription] = useState('');

    function handleTaskAdd() {
        /*if (tasks.includes(taskDescription)) {
            return Alert.alert("Já existe alguém com esse nome.");
        }*/

        setTasks(prevState => [...prevState, taskDescription]);
        setTaskDescription('');
    }
    function handleTaskRemove(name: string) {
        Alert.alert("Remover", `Remover a tarefa ${name}?`, [
            {
                text: "Cancelar",
                style: 'cancel'
            },
            {
                text: "Sim",
                onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
            },
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.logo1}>
                    <Image source={ImagesAssets.logo1} />
                </View>

                <View style={styles.logo2}>
                    <Image source={ImagesAssets.logo2} />
                </View>

                <View style={styles.logo3}>
                    <Image source={ImagesAssets.logo3} />
                </View>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor="#808080"
                    onChangeText={setTaskDescription}
                    value={taskDescription}
                />
                <TouchableOpacity style={styles.submitButton} onPress={() => handleTaskAdd()}>
                    <MaterialCommunityIcons name="plus-circle-outline" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.filtersContainer}>
                <View style={styles.filterPerContainer}>
                    <Text style={styles.filter1Label}>Criadas</Text>
                    <View style={styles.filterCountContainer}><Text style={styles.filterCount}>0</Text></View>
                </View>
                <View style={styles.filterPerContainer}>
                    <Text style={styles.filter2Label}>Concluídas</Text>
                    <View style={styles.filterCountContainer}><Text style={styles.filterCount}>0</Text></View>
                </View>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task
                        key={item}
                        name={item}
                        onRemove={() => handleTaskRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.listEmptyContainer}>
                        <SimpleLineIcons name="drawer" size={40} color="#383838" style={styles.listEmptyIcon} />
                        <Text style={styles.listEmptyText1}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.listEmptyText2}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />


        </View>
    );
}