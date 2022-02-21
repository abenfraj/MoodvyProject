import { useNavigation } from '@react-navigation/native';

export default function WelcomePage() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Accueil</Text>
            <TouchableOpacity activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(ROUTE.WELCOME_TAB.PROFIL)}>
                <Text>Profil</Text>
            </TouchableOpacity >
        </View>
    );
}