import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../Screens/Dashboard';
import { VillagerDisplay } from "../Components/VillagerDisplay";

import { SelectGender } from "../Screens/SelectGender";
import { SelectSpecies } from "../Screens/SelectSpecies"
import { SelectVillager } from "../Screens/SelectVilager";
import { AddNewVillager } from "../Screens/AddNewVillager";
import { OldVillagerForm } from "../Screens/OldVillagerForm";
import { AddOldVillager } from "../Screens/AddOldVillager";

import { Profile } from "../Screens/Profile";
import { Delete } from "../Screens/Delete";
import { FramedPicture } from "../Screens/FramedPicture";

import { NeedHelp } from "../Screens/NeedHelp";

const Stack = createStackNavigator();

const StackNavigator = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                          }}/>
            <Stack.Screen name="VillagerDisplay" component={VillagerDisplay}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="SelectGender" component={SelectGender}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="SelectSpecies" component={SelectSpecies}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="SelectVillager" component={SelectVillager}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="AddNewVillager" component={AddNewVillager}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="OldVillagerForm" component={OldVillagerForm}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="AddOldVillager" component={AddOldVillager}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="Profile" component={Profile}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="Delete" component={Delete}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="FramedPicture" component={FramedPicture}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
            <Stack.Screen name="NeedHelp" component={NeedHelp}
                          initialParams={{data: props.data}}
                          options={{
                              title: null,
                              headerStyle: {
                                  height: 0
                              },
                              headerLeft: null,
                              gesturesEnabled: false
                          }}/>
        </Stack.Navigator>
    );
};

export { StackNavigator }
