import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const Home = () => {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Өөрийнхөө хувь хүний шинж чанараа олох</Text>
                        <Text style={styles.modalText}>Бие даасан даалгавар</Text>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Image source={require("../assets/images/clock.png")} />
                                <Text style={{ paddingLeft: 4 }}> 80 асуулт</Text>
                            </View>

                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Image source={require("../assets/images/question.png")} />
                                <Text style={{ paddingLeft: 4 }}>20 мин</Text>
                            </View>
                        </View>

                        <View style={{ width: "100%", backgroundColor: "#D6F2ED", borderRadius: 24, border: "1px solid black", paddingHorizontal: 24, paddingVertical: 16, marginTop: 32 }}>
                            <Text style={{ fontWeight: "bold", marginBottom: 24 }}>Үнэлгээний тухай</Text>
                            <Text style={{ fontWeight: "bold", marginBottom: 24 }}>Энэ нь хувь хүний ​​​​зан араншины төрөл тодорхойлох зорилготой тест юм.</Text>
                        </View>

                        <View style={{ width: "100%", backgroundColor: "#F9F4E7", borderRadius: 24, border: "1px solid black", paddingHorizontal: 24, paddingVertical: 16, marginTop: 32, marginBottom: 32 }}>
                            <Text style={{ fontWeight: "bold", marginBottom: 24 }}>Үнэлгээний тухай</Text>
                            <Text style={{ fontWeight: "bold", marginBottom: 24 }}>Энэ нь хувь хүний ​​​​зан араншины төрөл тодорхойлох зорилготой тест юм.</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                router.push("test");
                                setModalVisible(false);
                            }}>
                            <Text style={{ color: "white" }}>Тест өгөх</Text>
                        </TouchableOpacity>

                        {/* 
                        <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable> */}
                    </View>
                </View>
            </Modal>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    modalButton: {
        backgroundColor: "#705772",
        width: "100%",
        paddingVertical: 24,
        borderRadius: 32,
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Home;
