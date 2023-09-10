import React, { useState, useReducer } from 'react';
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
    const [tasksIncompleted, setTasksIncompleted] = useState<string[]>([]);
    const [tasksCompleted, setTasksCompleted] = useState<string[]>([]);
    const [taskDescription, setTaskDescription] = useState('');
    const [counterTasks, setCounterTasks] = useState(0);
    const [counterTasksCompleted, setCounterTasksCompleted] = useState(0);

    function handleTaskAdd() {
        if (tasksIncompleted.includes(taskDescription)) {
            return Alert.alert("Tarefa já existe!");
        }

        setTasksIncompleted(prevState => [taskDescription, ...prevState]);
        setTaskDescription('');
        setCounterTasks(prevState => prevState + 1);
    }

    function handleTaskRemove(name: string) {
        if (tasksCompleted.includes(name)) {
            return Alert.alert("Não é possível excluir uma tarefa completa!");
        }

        Alert.alert("Remover", `Remover a tarefa ${name}?`, [
            {
                text: "Cancelar",
                style: 'cancel'
            },
            {
                text: "Sim",
                onPress: () => {
                    setTasksIncompleted(prevState => prevState.filter(task => task !== name));
                    setCounterTasks(prevState => prevState - 1);
                }
            },
        ])
    }

    function changeTaskForComplete(name: string) {
        setTasksCompleted(prevState => [name, ...prevState]);
        setTasksIncompleted(prevState => prevState.filter(task => task !== name));
        setCounterTasksCompleted(prevState => prevState + 1);
    }

    function changeTaskForIncomplete(name: string) {
        setTasksIncompleted(prevState => [name, ...prevState]);
        setTasksCompleted(prevState => prevState.filter(task => task !== name));
        setCounterTasksCompleted(prevState => prevState - 1);
    }

    function handleTaskStatus(name: string) {
        if (tasksCompleted.includes(name)) {
            changeTaskForIncomplete(name);
        } else {
            changeTaskForComplete(name);
        }
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
                    <View style={styles.filterCountContainer}>
                        <Text style={styles.filterCount}>{counterTasks}</Text>
                    </View>
                </View>
                <View style={styles.filterPerContainer}>
                    <Text style={styles.filter2Label}>Concluídas</Text>
                    <View style={styles.filterCountContainer}>
                        <Text style={styles.filterCount}>{counterTasksCompleted}</Text>
                    </View>
                </View>
            </View>

            <FlatList
                data={[...tasksIncompleted, ...tasksCompleted]}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task
                        key={item}
                        description={item}
                        status={(tasksCompleted.includes(item) ? "completed" : "incompleted")}
                        onRemove={() => handleTaskRemove(item)}
                        onChangeStatus={() => handleTaskStatus(item)}
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