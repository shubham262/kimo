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

const spotCard = [
  {
    title: 'Maui',
    img: 'https://s3-alpha-sig.figma.com/img/640d/7d3d/8a273e66013fd174fd63e1d97199f058?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YwxUcHWHG-~eR-~MQ12B4zgP9152G7XUlov6csUM3QqIObvDm9psobmOc~O5yjlcCXRALWqUVzvr9SJAreNNMSRhbX1UZckGloZUidGoaiicshUZXt3~gzYppJicHd8FUclC2Rt0eX2bcLT58iEDyPYdgLhcHbYrWCevt2rAYaUkC6rvr4sy7V-vvYF-9El6RSQimlGbUxC~t23IGvl~fcLb3KzDWnhOF-QyedThgu~rMWXVCrhY8LKwBX1XLdfz9vE-gtnCDgzeJ3qlTTWvD2XNdqLhjrgq6tEXnHSRetONgz5Q5RG7iWo2~kVxgI2vUX~PkvpaVTp26C-~rfg09Q__',
  },
  {
    title: 'Kauai',
    img: 'https://s3-alpha-sig.figma.com/img/f535/6eb0/5d71760235c55592e36f0dc7ed65cd41?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q5wB0zPIzyMBIOkCd~gSRyJDuSO8r1bXID2vytCJ-qr-Xt4Y6l5BBBP-kSAsG1xO7Vqv4HKOPcV4mb5kDgODXqAFmYVYHjBBAHi~0T7a8MmJRBaTE7GAKmMdsnqurTOURoPCs5FfGCqGxUmZBn70iHS4~Ny9gYI1rPwOW7HbnqM51FjCiJqJPAdoPbbCNy36vvic3vchA3Z-cpdfDIXLiiph8LjCcFtEQW~GzB9BbH4qkVHCCHZah0uQ-g~f7hJr4afYUQfJszzji6MSU7KeWo5JeHWQVQDjjKsOPCO2SwMiH7JfVT3Porfg2kX88h8aIs191FshkpCzpV4esISP~A__',
  },
  {
    title: 'Honolulu',
    img: 'https://s3-alpha-sig.figma.com/img/a302/8920/159733e0f1d68451cdca41019b404b6c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L9P0beM6QFNXWgmnfu4got2qPaKz83UQL-BFJontbmf6vXlerBpbOme6lBrImbgJV49FtT7z0LXfI9JwcZ8k23QE0B~MgXTZtzQ9oXuy9loAWu3mWicptrk9YupIK7RL8qBweJrDnt6qggxO5hcPWGMDxeneyUGjjvuKsinJPyWkZ2Tm30w8wWhh9qBi2X8g5f4WmNE00LJ3k-tXM5l~4~OmWzGGlbneBLjPZ0c8ZmIstpBRqwFJ2PXZXb-J6hXBHkJlOtkL6ZFIbicQGX-qyf0Vgx982X9WJ-zryNvCV7B9sj8shtSuuDuKuaWtpY7Mh36FfPbB24HLCLAbkF7MnQ__',
  },
];

const Surfing = () => {
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
            style={{height: 240}}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/a973/85da/737edeac3a828c1387820461299f5e3a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOeBX~z-eP~6CDISLAhyae95OZXEZFlbdxTFvqOHh9l6QFNv-ux1w5PqB-q0FYf9-zx5LgPNaUL2~KN0NCdXpNQe1PiwbIK4x9jisylSkIP8-Fa6~DawdhdkVSq5IOg2Q~BRu5I8cV6P8LxSQdpfFB-O3Jj4GT15gCnN6UF7ruiYLRIpQgjNgm~YW97LcFq2C~wemX9sze0nTm9aEFI5khmOcOs5seRBHjBAackUbybGtS~NtkT86ohBJimfUYlfYLiJJV6RsZk-OqWtXsQnhLQt0rq-Tv6OdlgDu0s1oQrKVHtiScFMFNn6SeEm8Cug8Ug3H3WnBfrRmiI-JhUP8A__',
            }}
          />
          <View style={styles.topAbsoluteTextContainer}>
            <Text style={styles.topAbsoluteText}>Surfing</Text>
          </View>
        </View>

        <View style={styles.commonTextBlock}>
          <Text style={styles.longText}>
            Hawaii is the capital of modern surfing. This group of Pacific
            islands gets swell from all directions, so there are plenty of
            pristine surf spots for all.
          </Text>
        </View>
        {/* highlights */}
        <View style={{...styles.highlights, gap: 8}}>
          <Text style={styles.categoriesSubBlockHeader}>Top spots</Text>
          {spotCard?.map((ele, index) => (
            <View key={index} style={styles.topCard}>
              <Text style={styles.topCardLabelText}>{`${index + 1}. ${
                ele?.title
              } `}</Text>
              <Image
                style={{
                  height: 63,
                  width: 120,
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                }}
                source={{uri: ele?.img}}
              />
            </View>
          ))}
        </View>
        {/* categories */}
        <View style={styles.categories}>
          {/* subBlocks */}

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
    </SafeAreaView>
  );
};

export default memo(Surfing);
