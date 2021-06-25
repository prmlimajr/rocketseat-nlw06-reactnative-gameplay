import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { AddButton } from '../../components/AddButton';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { CategorySelection } from '../../components/CategorySelection';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const handleCategorySelection = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ];

  const handleAppointmentsDetail = () => {
    navigation.navigate('AppointmentsDetail');
  };

  return (
    <Background>
      <View style={styles.header}>
        <Profile />

        <AddButton />
      </View>

      <CategorySelection
        selectedCategory={category}
        setCategory={handleCategorySelection}
      />

      <View style={styles.content}>
        <ListHeader title='Partidas agendadas' subtitle='Total 6' />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} onPress={handleAppointmentsDetail} />
          )}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </Background>
  );
}
