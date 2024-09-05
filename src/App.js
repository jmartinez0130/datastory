import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapPin, Wind, Factory, Mountain, Users, Thermometer, Cloud, Droplets, AlertTriangle, Bike } from 'lucide-react';

// Air quality data for different locations in Medellín
const airQualityData = [
  { location: 'El Poblado', pm25: 12, aqi: 51 },
  { location: 'Laureles', pm25: 15, aqi: 58 },
  { location: 'La Candelaria', pm25: 22, aqi: 72 },
  { location: 'Belén', pm25: 18, aqi: 64 },
  { location: 'Robledo', pm25: 20, aqi: 68 },
];

// Air quality trends over time
const airQualityTrends = [
  { month: 'Jan', pm25: 15, aqi: 56 },
  { month: 'Feb', pm25: 17, aqi: 60 },
  { month: 'Mar', pm25: 20, aqi: 68 },
  { month: 'Apr', pm25: 18, aqi: 64 },
  { month: 'May', pm25: 16, aqi: 59 },
  { month: 'Jun', pm25: 14, aqi: 54 },
];

// Pollution sources data
const pollutionSources = [
  { name: 'Vehicle Emissions', value: 45 },
  { name: 'Industrial Activities', value: 30 },
  { name: 'Residential', value: 15 },
  { name: 'Other', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MedellinAirQualityDashboard = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [zoomedSource, setZoomedSource] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const handleSourceClick = (source) => {
    setZoomedSource(zoomedSource === source ? null : source);
  };

  const QuickFacts = () => (
    <div className="bg-white rounded-lg p-4 shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">Quick Facts</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <AlertTriangle className="mr-2 text-red-500" />
          <span>PM2.5 is a major air pollutant in Medellín</span>
        </li>
        <li className="flex items-center">
          <Mountain className="mr-2 text-gray-600" />
          <span>Aburrá Valley topography traps pollutants</span>
        </li>
        <li className="flex items-center">
          <Factory className="mr-2 text-purple-500" />
          <span>Vehicle emissions are the primary pollution source</span>
        </li>
        <li className="flex items-center">
          <Wind className="mr-2 text-blue-400" />
          <span>Wind patterns affect pollutant dispersion</span>
        </li>
        <li className="flex items-center">
          <Thermometer className="mr-2 text-red-500" />
          <span>Temperature inversions worsen air quality</span>
        </li>
        <li className="flex items-center">
          <Droplets className="mr-2 text-blue-300" />
          <span>Rainfall helps cleanse the air</span>
        </li>
      </ul>
    </div>
  );

  const steps = [
    {
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-4">Understanding Air Pollution in Medellín</h2>
          <QuickFacts />
          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
            <div className="w-1/2 p-6">
              <p className="mb-4">Medellín, nestled in the narrow Aburrá Valley, suffers from poor air circulation due to its topography. Air pollution, particularly PM2.5 (fine particulate matter), poses significant risks to public health, affecting the lungs and increasing the risk of heart and respiratory diseases.</p>
              <p>Citizens and decision-makers need to understand that improving air quality is not just a matter of reducing emissions but also addressing urban development and transportation policies.</p>
            </div>
            <div className="w-1/2">
              <img src="/medellin.png" alt="Medellín cityscape and air pollution factors" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-4">Air Quality Monitoring Workflow</h2>
          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
            <div className="w-1/2 p-6">
              <p className="mb-4">Monitoring air quality involves a complex workflow: data collection, pre-processing, and analytical processing. Field sensors collect raw data, which is cleaned and analyzed to provide actionable insights. Finally, this data is applied in various sectors like transportation planning and urban policy-making.</p>
              <p>This pipeline ensures decision-makers have access to high-quality, actionable data for developing targeted solutions to the city's air quality problems.</p>
            </div>
            <div className="w-1/2">
              <img src="/data_analysis_pipeline.png" alt="Air quality monitoring workflow" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-4">Current PM2.5 Levels Across Medellín</h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="mb-4">Monitoring PM2.5 levels is essential in understanding pollution hotspots across Medellín. The city center, La Candelaria, has the highest levels due to dense traffic, while residential areas like El Poblado show slightly better air quality.</p>
            <p className="mb-4">Understanding these differences can help target interventions, such as reducing traffic during peak hours and increasing green spaces in the most affected areas.</p>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={airQualityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis label={{ value: 'PM2.5 (μg/m³)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="pm25" fill="#8884d8" name="PM2.5 Level">
                  {airQualityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.pm25 > 20 ? '#FF4136' : '#0074D9'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-4">Air Quality Trends</h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="mb-4">Air quality fluctuates throughout the year in Medellín, with pollution spikes during the dry months from December to March. These patterns are influenced by seasonal weather, such as rain that helps clear the air.</p>
            <p className="mb-4">For policy-makers, this insight is crucial for designing mitigation strategies, such as increasing air quality monitoring during the dry season or enforcing stricter vehicle emission controls.</p>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={airQualityTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" label={{ value: 'PM2.5 (μg/m³)', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" label={{ value: 'AQI', angle: 90, position: 'insideRight' }} />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="pm25" stroke="#8884d8" name="PM2.5 Level" />
                <Line yAxisId="right" type="monotone" dataKey="aqi" stroke="#82ca9d" name="Air Quality Index" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-4">Pollution Sources in Medellín</h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="mb-4">Vehicle emissions contribute significantly to Medellín's air pollution, accounting for 45% of PM2.5 emissions. Industrial activities and household energy use are other major contributors. The rise in construction activities further exacerbates the problem.</p>
            <p className="mb-4">To address these sources, Medellín can adopt stricter vehicle emission standards, transition industries to cleaner technologies, and encourage the use of renewable energy in residential areas.</p>
            <div className="flex justify-center">
              <ResponsiveContainer width="80%" height={400}>
                <PieChart>
                  <Pie
                    data={pollutionSources}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pollutionSources.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]} 
                        onClick={() => handleSourceClick(entry.name)}
                        style={{ cursor: 'pointer', opacity: zoomedSource && zoomedSource !== entry.name ? 0.5 : 1 }}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {zoomedSource && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{zoomedSource}</h3>
                <p>{getSourceDetails(zoomedSource)}</p>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-4">Bicycle Infrastructure and Air Quality</h2>
          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
            <div className="w-1/2 p-6">
              <p className="mb-4">Proper bicycle infrastructure plays a critical role in reducing air pollution by promoting eco-friendly transportation. Research shows that bicycle lanes separated by physical barriers can help reduce cyclists' exposure to PM2.5 by keeping them further from vehicular emissions.</p>
              <p className="mb-4">Decision-makers can encourage cycling through better infrastructure, reducing vehicle use in key areas, and offering subsidies for electric bikes.</p>
            </div>
            <div className="w-1/2">
              <img src="/bike_lane.png" alt="Bicycle lanes comparison" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-4">Citizen Science and Evidence Co-creation</h2>
          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
            <div className="w-1/2 p-6">
              <p className="mb-4">Citizen science empowers communities to participate in air quality monitoring, providing valuable data for both residents and policy-makers. In Medellín, citizen science initiatives involve low-cost sensors deployed in neighborhoods, real-time data collection, and community workshops on environmental health.</p>
              <p className="mb-4">By engaging citizens in the process, decision-makers gain access to hyper-local data, helping them implement more targeted policies.</p>
            </div>
            <div className="w-1/2">
              <img src="/evidence_cocreation.png" alt="Evidence co-creation framework" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-4">Digital Literacy and Human-Centric Analysis</h2>
          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
            <div className="w-1/2 p-6">
              <p className="mb-4">Digital literacy plays a crucial role in enabling citizens to interpret air quality data effectively. Providing workshops and educational materials can empower communities to understand air pollution better and make informed decisions.</p>
              <p className="mb-4">Decision-makers should invest in digital literacy initiatives to bridge the gap between complex environmental data and community-level understanding, fostering a more engaged and informed populace.</p>
            </div>
            <div className="w-1/2">
              <img src="/digital_literacy.png" alt="Digital literacy and data analysis" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <div className="sticky top-0 z-50 bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Medellín Air Quality</h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <Scrollama onStepEnter={onStepEnter} offset={0.5}>
          {steps.map((step, index) => (
            <Step data={index} key={index}>
              <div className="min-h-screen flex items-center justify-center">
                {step.content}
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
};

function getSourceDetails(source) {
  switch (source) {
    case 'Vehicle Emissions':
      return "Vehicle emissions are the largest contributor to air pollution in Medellín. This includes exhaust from cars, buses, and motorcycles. Reducing vehicle emissions through improved public transportation, promotion of electric vehicles, and car-free zones can significantly improve air quality.";
    case 'Industrial Activities':
      return "Industrial activities, including manufacturing and power generation, are the second-largest source of air pollution. Implementing stricter emission controls, encouraging the adoption of cleaner technologies, and promoting energy efficiency in industries can help reduce this source of pollution.";
    case 'Residential':
      return "Residential sources of air pollution include cooking, heating, and the use of consumer products. Promoting energy-efficient appliances, clean cooking fuels, and educating residents about indoor air quality can help mitigate this source of pollution.";
    case 'Other':
      return "Other sources of air pollution include construction activities, waste management, and natural sources like dust. Implementing dust control measures at construction sites, improving waste management practices, and increasing green spaces can help address these sources.";
    default:
      return "No detailed information available for this source.";
  }
}

function App() {
  return (
    <div className="App">
      <MedellinAirQualityDashboard />
    </div>
  );
}

export default App;
