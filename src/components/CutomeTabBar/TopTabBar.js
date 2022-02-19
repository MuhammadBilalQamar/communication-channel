import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { BaseColor } from '@config'
export default class Tabs extends Component {
  // Initialize State
  state = {
    // First tab is active by default
    activeTab: 0,
    activeTitle: ''
  }

  _handleTabChange = (activeTab, activeTitle) => {
    this.setState({ activeTab, activeTitle })
  }

  // Pull children out of props passed from App component
  render({ children, ctx } = this.props) {
    return (
      <View style={styles.container}>
        {/* Tabs row */}
        <View style={styles.tabsContainer}>
          {/* Pull props out of children, and pull title out of props */}
          {children.map(({ props: { title } }, index) => (
            <TouchableOpacity
              key={index}
              style={[
                // Default style for every tab
                styles.tabContainer,
                // Merge default style with styles.tabContainerActive for active tab
                index === this.state.activeTab
                  ? {
                    ...styles.tabContainerActive,
                    borderBottomColor: this.props.activeTabColor
                  }
                  : {}
              ]}
              // Change active tab
              onPress={() => this._handleTabChange(index, title)}
              // Required key prop for components generated returned by map iterator
              key={index}
            >
              <Text
                style={{ ...styles.tabText, color: this.props.tabTextColor }}
              >
                {title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Content */}
        <View style={styles.contentContainer}>
          {children[this.state.activeTab]}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // Component container
  container: {
    flex: 1, // Take up all available space
  },
  // Tabs row container
  tabsContainer: {
    flexDirection: 'row', // Arrange tabs in a row
    paddingTop: 15, // Top padding
    backgroundColor: BaseColor.darkPrimaryColor,
    // backgroundColor: 'white',
    // paddingBottom: 5
    // marginBottom: 10
  },
  // Individual tab container
  tabContainer: {
    flex: 1, // Take up equal amount of space for each tab
    paddingVertical: 6, // Vertical padding
    borderBottomWidth: 2, // Add thick border at the bottom
    borderBottomColor: 'transparent', // Transparent border for inactive tabs
  },
  // Active tab container
  tabContainerActive: {
    // borderBottomColor:  // White bottom border for active tabs
    paddingBottom: 12
  },
  // Tab text
  tabText: {
    // fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  // Content container
  contentContainer: {
    flex: 1,// Take up all available space
  }
})
