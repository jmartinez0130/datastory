import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapPin, Wind, Factory, Mountain, Users, Thermometer, Cloud, Droplets, AlertTriangle, Bike } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLeaf, FaBus, FaSolarPanel, FaBiking } from 'react-icons/fa';
import { FaIconName } from 'react-icons/fa';

import './i18n';

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

const AnimatedSection = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  return <animated.div style={props}>{children}</animated.div>;
};

const TimelineComponent = () => {
  const { t } = useTranslation();
  const events = [
    {
      date: '2007',
      title: t('timeline.2007.title'),
      description: t('timeline.2007.description'),
      icon: <FaLeaf />
    },
    {
      date: '2011',
      title: t('timeline.2011.title'),
      description: t('timeline.2011.description'),
      icon: <FaBus />
    },
    {
      date: '2016',
      title: t('timeline.2016.title'),
      description: t('timeline.2016.description'),
      icon: <FaSolarPanel />
    },
    {
      date: '2019',
      title: t('timeline.2019.title'),
      description: t('timeline.2019.description'),
      icon: <FaBiking />
    }
  ];

  return (
    <VerticalTimeline>
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          date={event.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={event.icon}
        >
          <h3 className="vertical-timeline-element-title">{event.title}</h3>
          <p>{event.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

const MedellinAirQualityDashboard = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [zoomedSource, setZoomedSource] = useState(null);
  const { t, i18n } = useTranslation();

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const handleSourceClick = (source) => {
    setZoomedSource(zoomedSource === source ? null : source);
  };

  const QuickFacts = () => (
    <div className="bg-white rounded-lg p-4 shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">{t('quickFacts.title')}</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <AlertTriangle className="mr-2 text-red-500" />
          <span>{t('quickFacts.fact1')}</span>
        </li>
        <li className="flex items-center">
          <Mountain className="mr-2 text-gray-600" />
          <span>{t('quickFacts.fact2')}</span>
        </li>
        <li className="flex items-center">
          <Factory className="mr-2 text-purple-500" />
          <span>{t('quickFacts.fact3')}</span>
        </li>
        <li className="flex items-center">
          <Wind className="mr-2 text-blue-400" />
          <span>{t('quickFacts.fact4')}</span>
        </li>
        <li className="flex items-center">
          <Thermometer className="mr-2 text-red-500" />
          <span>{t('quickFacts.fact5')}</span>
        </li>
        <li className="flex items-center">
          <Droplets className="mr-2 text-blue-300" />
          <span>{t('quickFacts.fact6')}</span>
        </li>
      </ul>
    </div>
  );

  const steps = [
    {
      content: (
        <AnimatedSection>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">{t('intro.title')}</h2>
            <QuickFacts />
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
              <div className="w-1/2 p-6">
                <p className="mb-4">{t('intro.paragraph1')}</p>
                <p>{t('intro.paragraph2')}</p>
              </div>
              <div className="w-1/2">
                <img src="/medellin.png" alt={t('intro.imageAlt')} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      ),
    },
    {
      content: (
        <AnimatedSection>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">{t('airQualityMonitoring.title')}</h2>
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
              <div className="w-1/2 p-6">
                <p className="mb-4">{t('airQualityMonitoring.paragraph1')}</p>
                <p>{t('airQualityMonitoring.paragraph2')}</p>
              </div>
              <div className="w-1/2">
                <img src="/data_analysis_pipeline.png" alt={t('airQualityMonitoring.imageAlt')} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      ),
    },
    {
      content: (
        <AnimatedSection>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">{t('currentLevels.title')}</h2>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="mb-4">{t('currentLevels.paragraph1')}</p>
              <p className="mb-4">{t('currentLevels.paragraph2')}</p>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={airQualityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="location" />
                  <YAxis label={{ value: t('currentLevels.yAxisLabel'), angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pm25" fill="#8884d8" name={t('currentLevels.barName')}>
                    {airQualityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.pm25 > 20 ? '#FF4136' : '#0074D9'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </AnimatedSection>
      ),
    },
    {
      content: (
        <AnimatedSection>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">{t('airQualityTrends.title')}</h2>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="mb-4">{t('airQualityTrends.paragraph1')}</p>
              <p className="mb-4">{t('airQualityTrends.paragraph2')}</p>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={airQualityTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" label={{ value: t('airQualityTrends.yAxisLabelLeft'), angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: t('airQualityTrends.yAxisLabelRight'), angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="pm25" stroke="#8884d8" name={t('airQualityTrends.lineName1')} />
                  <Line yAxisId="right" type="monotone" dataKey="aqi" stroke="#82ca9d" name={t('airQualityTrends.lineName2')} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </AnimatedSection>
      ),
    },
    {
      content: (
        <AnimatedSection>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">{t('pollutionSources.title')}</h2>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="mb-4">{t('pollutionSources.paragraph1')}</p>
              <p className="mb-4">{t('pollutionSources.paragraph2')}</p>
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
                  <p>{t(`pollutionSources.details.${zoomedSource}`)}</p>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      ),
    },
    {
      content: (
        <AnimatedSection>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">{t('bicycleInfrastructure.title')}</h2>
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
              <div className="w-1/2 p-6">
                <p className="mb-4">{t('bicycleInfrastructure.paragraph1')}</p>
                <p className="mb-4">{t('bicycleInfrastructure.paragraph2')}</p>
              </div>
              <div className="w-1/2">
                <img src="/bike_lane.png" alt={t('bicycleInfrastructure.imageAlt')} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      ),
    },
    {
      content: (
        <AnimatedSection>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">{t('citizenScience.title')}</h2>
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
              <div className="w-1/2 p-6">
                <p className="mb-4">{t('citizenScience.paragraph1')}</p>
                <p className="mb-4">{t('citizenScience.paragraph2')}</p>
              </div>
              <div className="w-1/2">
                <img src="/evidence_cocreation.png" alt={t('citizenScience.imageAlt')} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      ),
    },
    {
      content: (
        <AnimatedSection>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">{t('digitalLiteracy.title')}</h2>
            <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
              <div className="w-1/2 p-6">
                <p className="mb-4">{t('digitalLiteracy.paragraph1')}</p>
                <p className="mb-4">{t('digitalLiteracy.paragraph2')}</p>
              </div>
              <div className="w-1/2">
                <img src="/digital_literacy.png" alt={t('digitalLiteracy.imageAlt')} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      ),
    },
    {
      content: (
        <AnimatedSection>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-4">{t('timeline.title')}</h2>
            <TimelineComponent />
          </div>
        </AnimatedSection>
      ),
    },
  ];

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <div className="sticky top-0 z-50 bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t('pageTitle')}</h1>
        <div>
          <button onClick={() => i18n.changeLanguage('en')} className="mr-2 px-2 py-1 bg-white text-blue-600 rounded">EN</button>
          <button onClick={() => i18n.changeLanguage('es')} className="px-2 py-1 bg-white text-blue-600 rounded">ES</button>
        </div>
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

function App() {
  return (
    <div className="App">
      <MedellinAirQualityDashboard />
    </div>
  );
}

export default App;
