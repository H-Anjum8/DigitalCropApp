import React from 'react';
import { ScrollView, Text, StyleSheet, SafeAreaView } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BackButton from '../../../components/commonComponents/BackButton';
import BASE_COLORS from '../../../utils/colors';

const TermsAndConditions = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Terms & Conditions</Text>

        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet consectetur. Lectus ultricies id sit dui
          lorem sem feugiat massa integer. Magna a fermentum lectus tempus nibh
          lacinia pharetra consectetur. Tien nam pretium metu nam quis duis
          luctus pellentesque id. Nulla dignissim suspendisse et dolor facilisis
          euismod. Tellus at pellentesque est eleifend elit convallis neque. A
          nisi erat amet blandit in rhoncus morbi. Mi luctus risus donec
          pharetra neque. Mattis donec porta nascetur enenan nisl. Risus
          consequat unra phasellus facilisis. Est porttitor est massa dui.
          Pellentesque diam amet luctus nec elit et plasta rhoncus id. Ett dus
          orci non volutpat. Purus ultrices donec habitasse juno aliquet. Et
          facilisi id at ac scelerisque netus ultrices massa. Pharetra eget eget
          rhoncus sit. Tempus phasellus integer orci molestie tincidunt sed eu
          sem rhoncus. Amet dolor vitae ac eu et. Adipiscing fusce viverra sed
          amet phasellus. Morbi quam cursus placerat varius odio sit ipsum
          fringilla. Porttitor dui ac blandit integer sem lectus. Torre vivamus
          et morbi mattis ac turpis biberdum lorem etiam. Morbi egestas sit
          consectetur venenatis amet venenatis imperdiet biberdum. Mauris montes
          consequat aliquam dis phasellus donec. Vitae in aliquet viverra lacus
          vel pretium orci in vel. Ut consequat nam a orci vestibulum. Viverra
          erat egestas tincidunt pellentesque diam ut neque mollis amet.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
  },
  scrollContainer: {
    padding: moderateScale(24),
    paddingBottom: verticalScale(40),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '500',
    color: BASE_COLORS.TEXT_GREEN,
    marginTop: verticalScale(52),
    marginBottom: verticalScale(10),
    textAlign: 'left',
  },
  contentText: {
    fontSize: moderateScale(12),
    color: BASE_COLORS.TEXT_INPUT,
    lineHeight: verticalScale(17),
    textAlign: 'justify',
  },
});

export default TermsAndConditions;
