import React, {memo} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {Text} from 'react-native-paper';
import useStyledComponents from '../../assets/styles/home';
import RightArrow from '../../assets/svg/RightArrow';

const categoriesCards = [
  'Adventure',
  'Culinary',
  'Eco-tourism',
  'Family',
  'Sport',
];

const highLightCards = [
  {
    title: 'Surfing',
    subTitle: 'Best Hawaiian islands for surfing.',
    img: 'https://s3-alpha-sig.figma.com/img/a973/85da/737edeac3a828c1387820461299f5e3a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOeBX~z-eP~6CDISLAhyae95OZXEZFlbdxTFvqOHh9l6QFNv-ux1w5PqB-q0FYf9-zx5LgPNaUL2~KN0NCdXpNQe1PiwbIK4x9jisylSkIP8-Fa6~DawdhdkVSq5IOg2Q~BRu5I8cV6P8LxSQdpfFB-O3Jj4GT15gCnN6UF7ruiYLRIpQgjNgm~YW97LcFq2C~wemX9sze0nTm9aEFI5khmOcOs5seRBHjBAackUbybGtS~NtkT86ohBJimfUYlfYLiJJV6RsZk-OqWtXsQnhLQt0rq-Tv6OdlgDu0s1oQrKVHtiScFMFNn6SeEm8Cug8Ug3H3WnBfrRmiI-JhUP8A__',
  },
  {
    title: 'Hula',
    subTitle: 'Try it yourself.',
    img: 'https://s3-alpha-sig.figma.com/img/58ee/529f/e7e588184251be5db79e55ade539dcf9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qgqg3D3ArZi0lMU3~3e~srx0D0rfnjWbxTGwBfsmmIn1jfqCB7TOhStOSdPH3eomAqvkJVhxsccqQ-xQNUuPy4Eu8DCGld9It2O7LTC8rWgLwQJ2ngEDXqPVv3ERyn8~8IXj-J2FGek714TKNkKzRv10tmNOruZW7vxgyVNQVqgHNDkT7CQEy5fyJNYY82DiY5druxoGoBrHMo04YrXYfHq8oXQ6UwyyxY00EWwQ9fnkEQ0YsaGLPFt~iOt0Dkkj1lvqucEY2~fnm0Xc0LFtwhAeaMhavCXf~qtQEPWbiT5wdf1EbJbjDyuyctqdpR9ig1I4c9I8ewgxaQTJFiB7zA__',
  },
  {
    title: 'Vulcanoes',
    subTitle: 'Volcanic conditions can change at any time.',
    img: 'https://s3-alpha-sig.figma.com/img/99a9/c625/f9718236aa4ae1832e31f222a71e82c6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ivuRe83u1V-xP6Lvqo2-DTtMgTWu8PIp~8eMdkWMikBa8LkKfpwL-xuZs-ghYZoCyGPAQnBtmLjjDFenQdzclHpnOmW2Npt4xb7tNlbln~qlpwzKAougLleWaQQVWEwizx5GBzojRL8TmEEcCsAzxp6O~rNGMljLTcROM0RhoWH~tV1ADZivugR-JxqXoJdYGe3eWGMHm8OI2cPULdsXJIv-nbzz-FGG29tKAeEBVFbdcKwqybubwH7PL1FnNrVb-hOJc~xzrty5JXwfRkIPyTaUzJi-0YdMpL1NTXZsz8rEZtC~u6pb7PZAElLyuzIsZXC76HXTVfU0-gsBAucR4A__',
  },
];

const Home = () => {
  const styles = useStyledComponents();
  return (
    <SafeAreaView style={styles.parentContainer}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        hidden={false}
        backgroundColor={'#fff'}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerTextStyle}>Aloha</Text>
        </View>
        {/* image */}
        <View style={styles.topImageHolder}>
          <Image
            style={{height: 480, zIndex: 1}}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/eb8d/55a4/4df95aa492f32fed48cde5ee1190b244?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gkW1Gy3WmMseiR1fkiGVoocVxor~HpnQoawC0Q0EUNv25uokmn0E9FlqCK4-N8QZqvBb8OeWXNccEk~RxiFv6--opmSbHpVy9rddDnq5WzYth4PsnEAqUo7V~KA2MfhK3H3AgTqq4TIgshQXC18G~hQjMRWszpzVz9p0iXlanCepaSDlvvDixPdEVSJUWTU2SldmGmauQQWFpoObcU6SjSoGy~sRKvH9WPELOLJMpC3BXEXH2NLTydi9HnlplJsxMEiykxABNLySrpJEAMwsixcrKJ7Ws-m4KvmQlurh-yx~0WmB1~QUEBup8M7aYOYc17fNdAmF6aNejIpFU64zhw__',
            }}
          />
          <View style={styles.topAbsoluteTextContainer}>
            <Text style={styles.topAbsoluteText}>Welcome</Text>
            <Text
              style={{
                ...styles.topAbsoluteText,
                color: 'rgba(255, 255, 255, 0.9))',
                letterSpacing: 2,
              }}>
              to Hawaii
            </Text>
          </View>
        </View>

        {/* highlights */}
        <View style={styles.highlights}>
          <Text style={styles.categoriesSubBlockHeader}>Highlights</Text>
          <FlatList
            data={highLightCards}
            renderItem={({item}) => (
              <View style={styles.highLightCards}>
                <Image
                  style={{
                    height: 170,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                  source={{
                    uri: item.img,
                  }}
                />
                <View style={styles.cardInfoContainer}>
                  <Text style={styles.cardTitletext}>{item?.title}</Text>
                  <Text style={styles.cardSubttitletext}>{item?.subTitle}</Text>
                  <View style={styles.rightBtnContainer}>
                    <TouchableOpacity style={styles.rightBtn}>
                      <RightArrow />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index?.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalContainer}
          />
        </View>
        {/* categories */}
        <View style={styles.categories}>
          {/* subBlocks */}
          <View style={styles.blocks}>
            <Text style={styles.categoriesSubBlockHeader}>Catergories</Text>
            {categoriesCards?.map((ele, index) => (
              <View key={index} style={styles.categoryCards}>
                <Text>{ele}</Text>
                <RightArrow />
              </View>
            ))}
          </View>
          <View style={{...styles.blocks, marginTop: 36}}>
            <Text style={styles.categoriesSubBlockHeader}>Travel Guide</Text>
            <View style={styles.travelGuideCard}>
              <View style={styles.guideInfo}>
                <View style={styles.guideInfoDetails}>
                  <Text style={styles.guideName}>Hadwin Malone</Text>
                  <Text>Guide since 2012</Text>
                </View>
                <Image
                  style={{height: 74, width: 74, borderRadius: 100}}
                  source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/ca53/1c08/f53ba191996cef058cdbb6eaba591b39?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0z6NCM61O7S1BJOXW0l7tNJPAphOlxNPaVJi8ke0XKaGIYOEEvlWANx8zMCdVFajPYuVxqkguuEo0WAKjYdIYEFu2Cfhtteirn-Dk8BjJ2GHo0KGdi9WSwEcduzzTk9zupKy-ch2QM42HKoYezp4zjLsrNKiPZhyR-RKrrUfNhBPGvWv-gNmaRfJ8YjJUrdEPo04cW2yRI8wsjTGVE33eoj5-ITGddJebtVf4jrfKPdWMaSXDFMdvcJm9WsFpvF5356GvH4gn5h4HHAuI4TYNHlX-QMjZp2hnUruW9Gje1KdnYFTUy75MjYfaG~r1ZSBNqRuvvsLpc8SFpDpOcz4Q__',
                  }}
                />
              </View>
              <TouchableOpacity style={styles.contactBtn}>
                <Text>Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.stickyBtnContianer}>
        <TouchableOpacity style={styles.stickyBtn}>
          <Text style={styles.stickyText}>Book a trip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default memo(Home);
