import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';

const CityPicker = ({ setSelected }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre&max=1000');
        const data = await response.json();
        const citiesList = data.provincias.map((city) => ({ key: city.id, value: city.nombre }));
        setCities(citiesList);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={cities}
      save="value"
      placeholder='Seleccioná la ciudad...'
      searchPlaceholder='Buscar'
      isLoading={isLoading}
      loadingText='Cargando...'
    />
  );
};

export default CityPicker;