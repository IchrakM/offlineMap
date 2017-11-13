import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';

const accessToken = 'pk.eyJ1IjoiYmlzc291IiwiYSI6ImNqOWQ4eHF6eTF3NG4zM29yMXN4ZzdoeXEifQ.H_xbWuzgXmLYC_-ESiMFAw';
Mapbox.setAccessToken(accessToken);

const SelectedStations =props=>(

   <View  style={style =styles.SelectStationContainer}>
     <SelectMultiple
     
     items={props.nameStations}
     selectedItems={props.selectedStations}
     onSelectionsChange={props.onSelectionsChange} />
       <Button
        title="OK"
        onPress={() => props.onPress()}
      />
    </View>
  );
export default class App extends Component<{}> {
  state = {
    nameStations : ['Es Senia Université','es Senia sud','Senia contre','Moulay AEK','IGMO','Cité Volontaire ENSET','Lycée les Palmiers','Jardin Othmania','Cité Universitaire Hai El Badr','Sûreté de Wilaya ','Palais de sports','Ghaouti','Medina Djadida ','Tlemcen Houaha','Place Mokrani','Place 1er Novembre ','Emir Abdelkader ','Gare SNTF ','1er Boulevard ','Place Moulay ','Maalem','Hammou Mokhtar Les Castors ','Mosquée Ibn Badis ','Palais de justice ','Carrefour 3 Cliniques ','Cité USTO ','Hôpital 1er Novembre ','Université USTO ','USTO-Bifurcation ','Yassmine ','Hai Sabah ','Gare Routière de Sidi Maarouf '],
    selectedStations :[],
    show:false,
    center: {
      latitude: 35.6911100,
      longitude: -0.6416700
},
    zoom: 11,
    userTrackingMode: Mapbox.userTrackingMode.none,
    annotations: [{
      coordinates: [40.72052634, -73.97686958312988],
      type: 'point',
      title: '',
      subtitle: '',
     
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




 onchangeShowState=()=>{
  let Lat_Long = [[35.642527,-0.6195367,'Es Senia Université'],[35.645073, -0.620567,'es Senia sud'],[35.649907, -0.625147,'Senia contre'],[35.655099, -0.628173,'Moulay AEK'],[35.661274, -0.631898,'IGMO'],[35.665747, -0.634656,'Cité Volontaire ENSET'],[35.671308, -0.638055,'Lycée les Palmiers'],[35.675890, -0.640978,'Jardin Othmania'],[35.679869, -0.643400,'Cité Universitaire Hai El Badr'],[35.683525, -0.645584,'Sûreté de Wilaya '],[35.686919, -0.647665,'Palais de sports'],[35.689398, -0.648733,'Ghaouti'],[35.692409, -0.649929,'Medina Djadida '],[35.696735, -0.651635,'Tlemcen Houaha'],[35.701405, -0.650095,'Place Mokrani'],[35.703662, -0.649205,'Place 1er Novembre '],[35.699933, -0.644795,'Emir Abdelkader '],[35.699728, -0.638529,'Gare SNTF '],[35.698663, -0.631094,'1er Boulevard '],[35.699123, -0.625643,'Place Moulay '],[35.698077, -0.617739,'Maalem'],[35.697088, -0.613259,'Hammou Mokhtar Les Castors '],[35.696883, -0.604928,'Mosquée Ibn Badis '],[35.699924, -0.601232,'Palais de justice '],[35.701967, -0.594237,'Carrefour 3 Cliniques '],[35.702011, -0.588744,'Cité USTO '],[35.702268, -0.583605,'Hôpital 1er Novembre '],[35.704058, -0.577650,'Université USTO '],[35.706219, -0.573053,'USTO-Bifurcation '],[35.703366, -0.56994,'Yassmine '],[35.697158, -0.571151,'Hai Sabah '],[35.691164, -0.568838,'Gare Routière de Sidi Maarouf ']];
  let i;
  let j;
  let result=0;
   if (this.state.selectedStations.length==2)
 {this.setState(prevState => ({ ...this.state, show: !prevState.show }));
     let source = this.state.selectedStations[0].value;
     let dest = this.state.selectedStations[1].value;
   // on mets la boucle de calcul de la distance 
    let indexSource= this.state.nameStations.indexOf(source);
    let indexDest= this.state.nameStations.indexOf(dest);

if (indexSource > indexDest)
{
  j = indexSource;
  indexSource= indexDest;
  indexDest =j;
  
}
//alert(indexSource);
      for (i = indexSource ; i< indexDest ;i++ )
      { result= result + this.distance (Lat_Long[i][0], Lat_Long[i][1], Lat_Long[i+1][0], Lat_Long[i+1][1]) ;      }
      result = result *1000;
      alert("La distance : " + result.toFixed(2) +" m\n"+ "La duré : " + ((result /(17*1000))*60).toFixed(2) + " min" );
        
}

 else{
     
     alert("Veuillez choisir 2 stations");

 }
 
  
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
onSelectionsChange = (selectedStations) => {
// selectedFruits is array of { label, value }
this.setState({selectedStations });
}





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
distance =(lat_a, lon_a, lat_b, lon_b) =>
{
a = Math.PI / 180;
lat1 = lat_a * a;
lat2 = lat_b * a;
lon1 = lon_a * a;
lon2 = lon_b * a;

t1 = Math.sin(lat1) * Math.sin(lat2);
t2 = Math.cos(lat1) * Math.cos(lat2);
t3 = Math.cos(lon1 - lon2);
t4 = t2 * t3;
t5 = t1 + t4;
rad_dist = Math.atan(-t5/Math.sqrt(-t5 * t5 +1)) + 2 * Math.atan(1);

return (rad_dist * 3437.74677 * 1.1508) * 1.6093470878864446;
}


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
          styleURL={Mapbox.mapStyles.street}
          userTrackingMode={this.state.userTrackingMode}
          annotations={this.state.annotations}
          onChangeUserTrackingMode={this.onChangeUserTrackingMode}
          onRegionDidChange={this.onRegionDidChange}
          onRegionWillChange={this.onRegionWillChange}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
          onTap={this.onTap}
        />
        {this.state.show && <SelectedStations onPress={this.onchangeShowState} nameStations={this.state.nameStations} selectedStations={this.state.selectedStations}  onSelectionsChange={this.onSelectionsChange}/>
        }
      <View style ={{position:'relative'}} >
{this._renderButtons()}

      </View>
     
      </View>
);
}

  _renderButtons() {

    return (
      <View style = {styles.styleOptions}>
        <ScrollView horizontal={true}>
        <TouchableOpacity onPress={this.fillStations} style = {styles.button}>
            <Text >
Stations
            </Text>
         </TouchableOpacity>
        
          <TouchableOpacity style = {styles.button} onPress={() => this.setState({ userTrackingMode: Mapbox.userTrackingMode.followWithHeading })}>
            <Text >
Your location
            </Text>
         </TouchableOpacity>
      
          <TouchableOpacity style = {styles.button} onPress={() =>this.setState({show :!this.state.show})} >
            <Text >
Between
            </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this._map && this._map.easeTo({ pitch: 40 })} style = {styles.button}>
            <Text >
degree vision
            </Text>
         </TouchableOpacity>
        </ScrollView>

      </View>
);
}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
},
  map: {
    flex: 1,
    width: window.width,
    height: window.height,
         
},
  styleOptions: {
      justifyContent: 'center',
       alignItems: 'center',
        borderRadius: 10,
       flexDirection: 'row',
       position: 'relative',
       opacity :10,
     
},
  button: {
      borderWidth: 1,
      padding: 25,
    
},
   
  SelectStationContainer:{
   flex: 1,
  //justifyContent:'center',
  height: 500,
   width: 300,
   justifyContent: 'center',
  position: 'absolute' ,
  flexGrow:1,
   bottom:50,
   top:30,
   right:30,
   left:30,

  
  },

});


SelectedStations.propTypes = {
  onPress: React.PropTypes.func,
  nameStations: React.PropTypes.array,
  selectedStations:React.PropTypes.array,
  onSelectionsChange:React.PropTypes.func,
};