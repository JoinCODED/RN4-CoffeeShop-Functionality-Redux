import React, { Component } from "react";
import { ImageBackground, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import { List, Content } from "native-base";

// Components
import CartButton from "../CartButton";

class CoffeeList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Coffee List",
    headerLeft: null,
    headerRight: <CartButton />
  });

  render() {
    const { coffeeshops } = this.props.coffee;
    let shops;
    if (coffeeshops) {
      shops = coffeeshops.map(coffeeshop => (
        <CoffeeItem coffeeShop={coffeeshop} key={coffeeshop.id} />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffee: state.coffee
});

export default connect(
  mapStateToProps,
  {}
)(CoffeeList);
