function mySettings(props) {
  return (
    <Page>
      <Section title={<Text bold align="center">Poochie settings</Text>}> </Section>
         
            <Select
              label={`Secondary timezone`}
              settingsKey="secondaryTimezone"
              options={[
                {name:"[Local Time]", value:{timezoneName:null, timezoneCoordinates:null, timzoneOffset:null, }},
                {name:"Beijing Time", value:{timezoneName:"BJS", timezoneCoordinates:"lat=39.90615&lng=116.39125", timezoneOffset:480 }},
                {name:"Brussels Time", value:{timezoneName:"BRU", timezoneCoordinates:"lat=50.84683&lng=4.35170", timzoneOffset:60 }},
                {name:"Buenos Aires Time", value:{timezoneName:"BUE", timezoneCoordinates:"lat=-34.61607&lng=-58.43329" , timezoneOffset:-180 }},
                {name:"Cairo Time", value:{timezoneName:"CAI", timezoneCoordinates:"lat=30.03503&lng=31.56475", timezoneOffset:130 }},
                {name:"Jakarta Time", value:{timezoneName:"JKT", timezoneCoordinates:"lat=-6.17542&lng=106.82718", timezoneOffset:420 }},
                {name:"Hong Kong Time", value:{timezoneName:"HKG", timezoneCoordinates:"lat=22.27942&lng=114.16281", timezoneOffset:480 }},
                {name:"London Time", value:{timezoneName:"LON", timezoneCoordinates:"lat=51.5074&lng=-0.1278", timezoneOffset:60 }},
                {name:"Los Angeles Time", value:{timezoneName:"LAX", timezoneCoordinates:"lat=34.02106&lng=-118.41174", timezoneOffset:-480 }},
                {name:"Madrid Time", value:{timezoneName:"MAD", timezoneCoordinates:"lat=40.47806&lng=-3.70343", timezoneOffset:60 }},
                {name:"Melbourne Time", value:{timezoneName:"MEL", timezoneCoordinates:"lat=-37.81439&lng=144.96316", timezoneOffset:-600 }},
                {name:"Mexico City Time", value:{timezoneName:"MEX", timezoneCoordinates:"lat=19.43261&lng=-99.13321", timezoneOffset:-360 }},
                {name:"Moscow Time", value:{timezoneName:"MOW", timezoneCoordinates:"lat=55.72520&lng=37.62896", timezoneOffset:180 }},
                {name:"New Delhi Time", value:{timezoneName:"DEL", timezoneCoordinates:"lat=28.64431&lng=77.09239", timezoneOffset:330 }},
                {name:"New York Time", value:{timezoneName:"NYC", timezoneCoordinates:"lat=40.69785&lng=-73.97963", timezoneOffset:-300 }},
                {name:"Paris Time", value:{timezoneName:"PAR", timezoneCoordinates:"lat=48.85888&lng=2.34694", timezoneOffset:60 }},
                {name:"Rome Time", value:{timezoneName:"ROM", timezoneCoordinates:"lat=41.89880&lng=12.54513", timezoneOffset:60 }},
                {name:"Sydney Time", value:{timezoneName:"SYD", timezoneCoordinates:"lat=-33.76965&lng=150.80178", timezoneOffset:600 }},
                {name:"Tokyo Time", value:{timezoneName:"TYO", timezoneCoordinates:"lat=35.6895&lng=139.6917", timezoneOffset:540 }},
                {name:"Washington Time", value:{timezoneName:"DCA", timezoneCoordinates:"lat=38.89381&lng=-77.01457", timezoneOffset:-300 }}
              ]}
            />         

        <Section title={<Text>Time color</Text>}>
        <ColorSelect
          settingsKey="timeColor"
          colors={[
            {color: 'darkblue'},
            {color: 'navy'},
            {color: 'black'},
            {color: 'darkred'},
            {color: 'darkslategray'},
            {color: 'firebrick'},
            {color: 'indigo'},
            {color: 'brown'},
            {color: 'darkmagenta'},
            {color: 'olive'},
            {color: 'darkviolet'},
            {color: 'goldenrod'},
            
            {color: 'aqua'},
            {color: 'aquamarine'},
            {color: 'chartreuse'},
            {color: 'floralwhite'},
            {color: 'gold'},
            {color: 'greenyellow'},
            {color: 'khaki'},
            {color: 'lawngreen'},
            {color: 'yellow'},
            {color: 'red'},
            {color: 'thistle'},
            {color: 'pink'}
          ]}
        />
      </Section>
        
      <Section title={<Text>Background color</Text>}>
        <ColorSelect
          settingsKey="backColor"
          colors={[
            {color: 'darkblue'},
            {color: 'navy'},
            {color: 'black'},
            {color: 'darkred'},
            {color: 'darkslategray'},
            {color: 'firebrick'},
            {color: 'indigo'},
            {color: 'brown'},
            {color: 'darkmagenta'},
            {color: 'olive'},
            {color: 'darkviolet'},
            {color: 'goldenrod'},
            
            {color: 'aqua'},
            {color: 'aquamarine'},
            {color: 'chartreuse'},
            {color: 'floralwhite'},
            {color: 'gold'},
            {color: 'greenyellow'},
            {color: 'khaki'},
            {color: 'lawngreen'},
            {color: 'yellow'},
            {color: 'red'},
            {color: 'thistle'},
            {color: 'pink'}
                     ]}
        />
      </Section>    
    
    </Page>
  );
}

registerSettingsPage(mySettings);
        