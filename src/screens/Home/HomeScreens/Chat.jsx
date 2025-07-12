import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import BackButton from '../../../components/commonComponents/BackButton';
import BASE_COLORS from '../../../utils/colors';
import { IMAGES } from '../../../utils/appAssets';
import { initialMessages } from '../../../utils/staticData';

const Chat = ({ navigation }) => {
  const route = useRoute();

  const chat = route.params?.chat || {
    name: 'Agri-Chemical Expert',
    avatar: IMAGES.USER1,
  };

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(initialMessages);

  const handleSend = () => {
    if (input.trim() === '') {
      Alert.alert('Error', 'Message cannot be empty');
      return;
    }
    const newMsg = {
      id: String(messages.length + 1),
      type: 'sent',
      text: input,
    };
    setMessages([...messages, newMsg]);
    setInput('');
  };

  const renderMessage = ({ item }) => {
    const isSent = item.type === 'sent';
    return (
      <View
        style={[
          styles.messageRow,
          { justifyContent: isSent ? 'flex-end' : 'flex-start' },
        ]}
      >
        {!isSent && <Image source={chat.avatar} style={styles.avatar} />}
        <View
          style={[
            styles.messageBubble,
            {
              backgroundColor: isSent
                ? BASE_COLORS.PRIMARY
                : BASE_COLORS.PRIMARY_DARK,
              borderTopLeftRadius: isSent ? 12 : 0,
              borderTopRightRadius: isSent ? 0 : 12,
            },
          ]}
        >
          <Text
            style={[
              styles.messageText,
              { color: isSent ? BASE_COLORS.WHITE : BASE_COLORS.BLACK },
            ]}
          >
            {item.text}
          </Text>
        </View>
        {isSent && <Image source={IMAGES.USER2} style={styles.avatar} />}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackButton style={styles.BackButton} />
        <Image source={chat.avatar} style={styles.profileImage} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.profileName}>{chat.name}</Text>
          <Text style={styles.onlineText}>Online</Text>
        </View>
        {/* <Ionicons name="ellipsis-vertical" size={22} color="#000" /> */}
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* Input Bar */}
      <View style={styles.inputBar}>
        <TouchableOpacity>
          <Ionicons
            name="add"
            size={28}
            color={BASE_COLORS.WHITE}
            style={styles.plusIcon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message here..."
          placeholderTextColor={BASE_COLORS.TEXT_INPUT_FIELD}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={26} color={BASE_COLORS.PRIMARY} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BASE_COLORS.WHITE, marginBottom: 10 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 4,
    marginTop: 10,

    borderBottomWidth: 0.5,
    borderColor: BASE_COLORS.PRIMARY_LIGHT,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
  },
  onlineText: {
    fontSize: 12,
    color: BASE_COLORS.ONLINE,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 12,
    borderRadius: 14,
  },
  messageText: {
    fontSize: 14,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginHorizontal: 6,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 0.5,
    borderColor: BASE_COLORS.PRIMARY_LIGHT,
  },
  plusIcon: {
    backgroundColor: BASE_COLORS.PRIMARY,
    padding: 4,
    borderRadius: 6,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: BASE_COLORS.PRIMARY_DARK,
    borderRadius: 20,
    fontSize: 14,
  },
  BackButton: {
    marginTop: -17,
  },
});

export default Chat;
