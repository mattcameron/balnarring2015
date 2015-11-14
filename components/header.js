'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var Header = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight>
          <Text style={styles.textLeft} onPress={this.props.back}>{this.props.left}</Text>
          </TouchableHighlight>
        <Text style={styles.textCenter}>Schedule</Text>
        <Text style={styles.textRight}>Right</Text>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ccc',
    height: 60,
    paddingTop: 20,
  },
  textLeft: {
    lineHeight: 30,
    marginLeft: 10
  },
  textCenter: {
    lineHeight: 30,
  },
  textRight: {
    lineHeight: 30,
    marginRight: 10
  }
});

module.exports = Header;
