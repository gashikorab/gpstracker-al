import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCatch } from '../../reactHelper';
import { formatAddress } from '../util/formatter';
import { usePreference } from '../util/preferences';
import fetchOrThrow from '../util/fetchOrThrow';

const AddressValue = ({ latitude, longitude, originalAddress }) => {
  const addressEnabled = useSelector((state) => state.session.server.geocoderEnabled);
  const coordinateFormat = usePreference('coordinateFormat');

  const [address, setAddress] = useState();

  useEffect(() => {
    setAddress(originalAddress);
  }, [latitude, longitude, originalAddress]);

  const fetchAddress = useCatch(async () => {
    const query = new URLSearchParams({ latitude, longitude });
    const response = await fetchOrThrow(`/api/server/geocode?${query.toString()}`);
    const text = await response.text();
    setAddress(text);
  });

  useEffect(() => {
    if (addressEnabled && latitude != null && longitude != null) {
      fetchAddress();
    }
  }, [addressEnabled, latitude, longitude]);

  if (address) {
    return address;
  }

  const coordinates = formatAddress({ latitude, longitude }, coordinateFormat);
  return coordinates;
};

export default AddressValue;
