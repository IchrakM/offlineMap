/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView
} from 'react-native';

const accessToken = 'pk.eyJ1IjoiYmlzc291IiwiYSI6ImNqOWQ4eHF6eTF3NG4zM29yMXN4ZzdoeXEifQ.H_xbWuzgXmLYC_-ESiMFAw';
Mapbox.setAccessToken(accessToken);

export default class App extends Component<{}> {
  state = {
    center: {
      latitude: 35.6911100,
      longitude: -0.6416700
    },
    zoom: 11,
    userTrackingMode: Mapbox.userTrackingMode.none,
    annotations: [{
      coordinates: [40.72052634, -73.97686958312988],
      type: 'point',
      title: 'This is marker 1',
      subtitle: 'First marker',
     
     annotationImage: {
        source: { uri: 'https://cldup.com/7NLZklp8zS.png' },
        height: 25,
        width: 25
      },
      id: 'marker1'
    }, {
      coordinates: [40.714541341726175,-74.00579452514648],
      type: 'point',
      title: 'Important!',
      subtitle: 'Neat, this is a custom annotation image',
      annotationImage: {
        source: { uri: 'https://cldup.com/7NLZklp8zS.png' },
        height: 25,
        width: 25
      },
      id:'marker2'
    }, {
        coordinates: [[35.642527,-0.6195367],[35.645073, -0.620567],[35.649907, -0.625147],[35.655099, -0.628173],[35.661274, -0.631898],[35.665747, -0.634656],[35.671308, -0.638055],[35.675890, -0.640978],[35.679869, -0.643400],[35.683525, -0.645584],[35.686919, -0.647665],[35.689398, -0.648733],[35.692409, -0.649929],[35.696735, -0.651635],[35.701405, -0.650095],[35.703662, -0.649205],[35.699933, -0.644795],[35.699728, -0.638529],[35.698663, -0.631094],[35.699123, -0.625643],[35.698077, -0.617739],[35.697088, -0.613259],[35.696883, -0.604928],[35.699924, -0.601232],[35.701967, -0.594237],[35.702011, -0.588744],[35.702268, -0.583605],[35.704058, -0.577650],[35.706219, -0.573053],[35.703366, -0.56994],[35.697158, -0.571151],[35.691164, -0.568838]],
      type: 'polyline',
      strokeColor: 'red',
      strokeWidth: 3,
      strokeAlpha: .5,
      id: 'polyline'
    }]
  };


  onRegionDidChange = (location) => {
    this.setState({ currentZoom: location.zoomLevel });
    console.log('onRegionDidChange', location);
  };
  onRegionWillChange = (location) => {
    console.log('onRegionWillChange', location);
  };
  onUpdateUserLocation = (location) => {
    console.log('onUpdateUserLocation', location);
  };
  onOpenAnnotation = (annotation) => {
    console.log('onOpenAnnotation', annotation);
  };
  onRightAnnotationTapped = (e) => {
    console.log('onRightAnnotationTapped', e);
  };
  onLongPress = (location) => {
    console.log('onLongPress', location);
  };
  onTap = (location) => {
    console.log('onTap', location);
  };
  onChangeUserTrackingMode = (userTrackingMode) => {
    this.setState({ userTrackingMode });
    console.log('onChangeUserTrackingMode', userTrackingMode);
  };

  componentWillMount() {
    this._offlineProgressSubscription = Mapbox.addOfflinePackProgressListener(progress => {
      console.log('offline pack progress', progress);
    });
    this._offlineMaxTilesSubscription = Mapbox.addOfflineMaxAllowedTilesListener(tiles => {
      console.log('offline max allowed tiles', tiles);
    });
    this._offlineErrorSubscription = Mapbox.addOfflineErrorListener(error => {
      console.log('offline error', error);
    });
  }

  componentWillUnmount() {
    this._offlineProgressSubscription.remove();
    this._offlineMaxTilesSubscription.remove();
    this._offlineErrorSubscription.remove();
  }

  /*addNewMarkers = () => {
    // Treat annotations as immutable and create a new one instead of using .push()
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [40.73312,-73.989],
        type: 'point',
        title: 'This is a new marker',
        id: 'foo'
      }, {
        'coordinates': [[40.749857912194386, -73.96820068359375], [40.741924698522055,-73.9735221862793], [40.735681504432264,-73.97523880004883], [40.7315190495212,-73.97438049316406], [40.729177554196376,-73.97180557250975], [40.72345355209305,-73.97438049316406], [40.719290332250544,-73.97455215454102], [40.71369559554873,-73.97729873657227], [40.71200407096382,-73.97850036621094], [40.71031250340588,-73.98691177368163], [40.71031250340588,-73.99154663085938]],
        'type': 'polygon',
        'fillAlpha': 1,
        'fillColor': '#000000',
        'strokeAlpha': 1,
        'id': 'new-black-polygon'
      }]
    });
  };*/
  fillStations =()=> {
  let Lat_Long = [[35.642527,-0.6195367,'Es Senia Université'],[35.645073, -0.620567,'es Senia sud'],[35.649907, -0.625147,'Senia contre'],[35.655099, -0.628173,'Moulay AEK'],[35.661274, -0.631898,'IGMO'],[35.665747, -0.634656,'Cité Volontaire ENSET'],[35.671308, -0.638055,'Lycée les Palmiers'],[35.675890, -0.640978,'Jardin Othmania'],[35.679869, -0.643400,'Cité Universitaire Hai El Badr'],[35.683525, -0.645584,'Sûreté de Wilaya '],[35.686919, -0.647665,'Palais de sports'],[35.689398, -0.648733,'Ghaouti'],[35.692409, -0.649929,'Medina Djadida '],[35.696735, -0.651635,'Tlemcen Houaha'],[35.701405, -0.650095,'Place Mokrani'],[35.703662, -0.649205,'Place 1er Novembre '],[35.699933, -0.644795,'Emir Abdelkader '],[35.699728, -0.638529,'Gare SNTF '],[35.698663, -0.631094,'1er Boulevard '],[35.699123, -0.625643,'Place Moulay '],[35.698077, -0.617739,'Maalem'],[35.697088, -0.613259,'Hammou Mokhtar Les Castors '],[35.696883, -0.604928,'Mosquée Ibn Badis '],[35.699924, -0.601232,'Palais de justice '],[35.701967, -0.594237,'Carrefour 3 Cliniques '],[35.702011, -0.588744,'Cité USTO '],[35.702268, -0.583605,'Hôpital 1er Novembre '],[35.704058, -0.577650,'Université USTO '],[35.706219, -0.573053,'USTO-Bifurcation '],[35.703366, -0.56994,'Yassmine '],[35.697158, -0.571151,'Hai Sabah '],[35.691164, -0.568838,'Gare Routière de Sidi Maarouf ']];
  let table =[...this.state.annotations];
  Lat_Long.map((item,index) => {
  
    
     
      table.push({ coordinates: [item[0],item[1]],
        type: 'point',
        title: item[2],
        subtitle:item[0].toString() +' ' + item[1].toString(),
        annotationImage: {
        source: { uri: 'https://cldup.com/7NLZklp8zS.png' },
        height: 25,
        width: 25
      },
        id:item[2],
        
     })
       this.setState({annotations:table});
      
}); }




  
/*
  updateMarker2 = () => {
    // Treat annotations as immutable and use .map() instead of changing the array
    this.setState({
      annotations: this.state.annotations.map(annotacdtion => {
        if (annotation.id !== 'marker2') { return annotation; }
        return {
          coordinates: [40.714541341726175,-74.00579452514648],
          'type': 'point',
          title: 'New Title!',
          subtitle: 'New Subtitle',
          annotationImage: {
            source: { uri: 'https://cldup.com/7NLZklp8zS.png' },
            height: 25,
            width: 25
          },
          id: 'marker2'
        };
      })
    });
  };

  removeMarker2 = () => {
    this.setState({
      annotations: this.state.annotations.filter(a => a.id !== 'marker2')
    });
  };
*/
  render() {
    StatusBar.setHidden(true);


    return (
      <View style={styles.container}>
        <MapView
          ref={map => { this._map = map; }}
          style={styles.map}
          initialCenterCoordinate={this.state.center}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={false}
          styleURL={Mapbox.mapStyles.dark}
          userTrackingMode={this.state.userTrackingMode}
          annotations={this.state.annotations}
        //  annotationsAreImmutable
          onChangeUserTrackingMode={this.onChangeUserTrackingMode}
          onRegionDidChange={this.onRegionDidChange}
          onRegionWillChange={this.onRegionWillChange}
         // onOpenAnnotation={this.onOpenAnnotation}
         // onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
          onTap={this.onTap}
        />
      <ScrollView style={styles.scrollView}>
        {this._renderButtons()}
      </ScrollView>
      </View>
    );
  }

  _renderButtons() {

    return (
      <View>
        <Text  onPress={this.fillStations}> blablabla </Text>
     
        <Text onPress={() => this._map && this._map.setDirection(0)}>
          Set direction to 0
        </Text>
        <Text onPress={() => this._map && this._map.setZoomLevel(6)}>
          Zoom out to zoom level 6
        </Text>
        <Text onPress={() => this._map && this._map.setCenterCoordinate(48.8589, 2.3447)}>
          Go to Paris at current zoom level {parseInt(this.state.currentZoom)}
        </Text>
        <Text onPress={() => this._map && this._map.setCenterCoordinateZoomLevel(35.68829, 139.77492, 14)}>
          Go to Tokyo at fixed zoom level 14
        </Text>
        <Text onPress={() => this._map && this._map.easeTo({ pitch: 30 })}>
          Set pitch to 30 degrees
        </Text>
        <Text onPress={this.addNewMarkers}>
          Add new marker
        </Text>
        <Text onPress={this.updateMarker2}>
          Update marker2
        </Text>
        <Text onPress={() => this._map && this._map.selectAnnotation('marker1')}>
          Open marker1 popup
        </Text>
        <Text onPress={() => this._map && this._map.deselectAnnotation()}>
          Deselect annotation
        </Text>
        <Text onPress={this.removeMarker2}>
          Remove marker2 annotation
        </Text>
       
        <Text onPress={() => this._map && this._map.setVisibleCoordinateBounds(40.712, -74.227, 40.774, -74.125, 100, 0, 0, 0)}>
          Set visible bounds to 40.7, -74.2, 40.7, -74.1
        </Text>
        <Text onPress={() => this.setState({ userTrackingMode: Mapbox.userTrackingMode.followWithHeading })}>
          Set userTrackingMode to followWithHeading
        </Text>
        <Text onPress={() => this._map && this._map.getCenterCoordinateZoomLevel((location)=> {
            console.log(location);
          })}>
          Get location
        </Text>
        <Text onPress={() => this._map && this._map.getDirection((direction)=> {
            console.log(direction);
          })}>
          Get direction
        </Text>
        <Text onPress={() => this._map && this._map.getBounds((bounds)=> {
            console.log(bounds);
          })}>
          Get bounds
        </Text>
        <Text onPress={async () => {
          try {
            await Mapbox.initializeOfflinePacks();

            await Mapbox.addOfflinePack({
              name: 'test',
              type: 'bbox',
              bounds: [42.00273287349021, 12.635713745117073, 41.74068098333959, 12.153523284912126],
              minZoomLevel: 4,
              maxZoomLevel: 15,
              metadata: { anyValue: 'you wish' },
              styleURL: Mapbox.mapStyles.dark
            });

            console.log('Offline pack added');
          } catch (e) {
            console.log(e);
          }
        }}>
          Create offline pack
        </Text>
        <Text onPress={() => {
            Mapbox.getOfflinePacks()
              .then(packs => {
                console.log(packs);
              })
              .catch(err => {
                console.log(err);
              });
        }}>
          Get offline packs
        </Text>
        <Text onPress={() => {
            Mapbox.suspendOfflinePack('test')
              .then(info => {
                if (info.suspended) {
                  console.log('Suspended', info.suspended);
                } else {
                  console.log('No packs to suspend');
                }
              })
              .catch(err => {
                console.log(err);
              });
        }}>
          Pause/Suspend pack with name 'test'
        </Text>
        <Text onPress={() => {
            Mapbox.resumeOfflinePack('test')
              .then(info => {
                if (info.resumed) {
                  console.log('Resumed', info.resumed);
                } else {
                  console.log('No packs to resume');
                }
              })
              .catch(err => {
                console.log(err);
              });
        }}>
          Resume pack with name 'test'
        </Text>
        <Text onPress={() => {
            Mapbox.removeOfflinePack('test')
              .then(info => {
                if (info.deleted) {
                  console.log('Deleted', info.deleted);
                } else {
                  console.log('No packs to delete');
                }
              })
              .catch(err => {
                console.log(err);
              });
        }}>
          Remove pack with name 'test'
        </Text>
        <Text>User tracking mode is {this.state.userTrackingMode}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  map: {
    flex: 1
  },
  scrollView: {
    flex: 1
  }
});