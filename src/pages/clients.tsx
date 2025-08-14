import Header from '../components/Header';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChoroplethController, GeoFeature, ProjectionScale, ColorScale } from 'chartjs-chart-geo';
import { Chart } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { feature } from 'topojson-client';
import type { FeatureCollection } from 'geojson';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChoroplethController,
  GeoFeature,
  ProjectionScale,
  ColorScale
);

// Define the chart data type
interface ChartDataType {
  labels: string[];
  datasets: Array<{
    label: string;
    data: Array<{
      feature: any;
      value: number;
    }>;
    backgroundColor: ((context: any) => string) | string;
    borderColor?: ((context: any) => string) | string;
    borderWidth?: number;
  }>;
}

export default function Clients() {
  const [chartData, setChartData] = useState<ChartDataType | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Load world atlas data
        const data = await fetch('https://unpkg.com/world-atlas/countries-50m.json')
          .then(r => r.json());
        
        // Extract countries using feature from topojson-client
        const countries = (feature(data, data.objects.countries) as any).features;
        
        // Define target countries (USA, Canada, Taiwan, Vietnam)
        const targetCountries = ['United States of America', 'Canada', 'Taiwan', 'Vietnam'];
        
        // Create dataset with simplified approach
        setChartData({
          labels: countries.map((d: any) => d.properties.name),
          datasets: [{
            label: 'Countries',
            data: countries.map((d: any) => {
              const countryName = d.properties.name;
              return {
                feature: d,
                value: targetCountries.includes(countryName) ? 1 : 0
              };
            }),
            // Use simple function without accessing context.raw.value
            backgroundColor: function(context: any) {
              if (!context.dataset) return '#e5e7eb';
              const index = context.dataIndex;
              const value = context.dataset.data[index]?.value;
              return value === 1 ? '#dc2626' : '#e5e7eb';
            },
            borderColor: function(context) {
              if (!context.dataset) return '#9ca3af';
              const index = context.dataIndex;
              const value = context.dataset.data[index]?.value;
              return value === 1 ? '#991b1b' : '#9ca3af';
            },
            borderWidth: 1
          }]
        });
      } catch (error) {
        console.error('Error loading world data:', error);
        setChartData(null);
      }
    };

    loadData(); // renamed from loadWorldData() to match the defined function
  }, []);

  const mapOptions = {
    responsive: true,
    maintainAspectRatio: false,
    showOutline: true,
    showGraticule: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          generateLabels: () => [
            {
              text: 'Primary Markets',
              fillStyle: '#dc2626',
              strokeStyle: '#991b1b',
              lineWidth: 1,
            },
            {
              text: 'Other Regions',
              fillStyle: '#e5e7eb',
              strokeStyle: '#9ca3af',
              lineWidth: 1,
            }
          ]
        }
      },
      title: {
        display: true,
        text: 'EJEN Global Client Distribution',
        font: {
          size: 18,
          weight: 'bold',
        },
        padding: 20,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            if (!context.dataset) return '';
            
            const index = context.dataIndex;
            const value = context.dataset.data[index]?.value;
            
            return value === 1 ? 'Primary Market' : 'Future Expansion';
          },
        },
      },
    },
    scales: {
      projection: {
        axis: 'x',
        projection: 'equalEarth'
      }
    },
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Our Global Clients</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Serving premium food and beverage companies across North America and Asia
            </p>
          </div>
        </div>
      </section>

      {/* Global Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Where We Serve</h2>
            
            {/* Choropleth World Map */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                {chartData ? (
                  <div style={{ height: '500px' }}>
                    <Chart
                      type="choropleth"
                      data={chartData}
                      options={mapOptions}
                    />
                  </div>
                ) : (
                  <div className="h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading world map...</p>
                    </div>
                  </div>
                )}
                
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="w-4 h-4 bg-red-600 rounded"></div>
                        <span className="font-semibold text-gray-800">Primary Markets</span>
                      </div>
                      <p className="text-sm text-gray-600">North America & Asia</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                        <span className="font-semibold text-gray-800">Other Regions</span>
                      </div>
                      <p className="text-sm text-gray-600">Future Expansion Areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}