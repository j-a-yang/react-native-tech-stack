// ran into some sort of bug when it comes to this.props.library.titleStyle
// i had to use the .item as well to get the right results.

import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring(); // this is freakin cool!
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.descriptionStyle}>{library.item.description}</Text>
        </CardSection>
      );
    }
  }


render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item; // Chris, I'm having issues with the "item".

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    //flex: 1   // it seems like the feature from flex 1 happens be default.
  }
};


const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded: expanded };
};


export default connect(mapStateToProps, actions)(ListItem);
