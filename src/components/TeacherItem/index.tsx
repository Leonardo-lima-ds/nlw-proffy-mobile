import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import styles from './styles';

interface TeacherItemsProps {
    teacher: {
        name: string;
        avatar: string;
        subject: string;
        bio: string;
        cost: number;
    }
}

const TeacherItem: React.FC<TeacherItemsProps> = ({ teacher }) => {

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />
            </View>

            <View style={styles.profileInfo}>
                <Text style={styles.textName}>{teacher.name}</Text>
                <Text style={styles.textSubject}>{teacher.subject}</Text>
            </View>

            <Text style={styles.bio}>{teacher.bio}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora: {' '}
                    <Text style={styles.priceValue}>{teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutlineIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;