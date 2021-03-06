const OpeningTimes = require('moment-opening-times');

function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

function pharmacyMapper(pharmacyList) {
  const viewModels = [];
  pharmacyList.forEach((item, index) => {
    const model = {
      label: 'Pharmacy',
      name: item.content.organisationSummary.name,
      distanceInKms: item.content.organisationSummary.Distance,
      coords: {
        latitude: item.content.organisationSummary.geographicCoordinates.latitude,
        longitude: item.content.organisationSummary.geographicCoordinates.longitude,
      },
      addressLine: item.content.organisationSummary.address.addressLine,
      postcode: item.content.organisationSummary.address.postcode,
      telephone: item.content.organisationSummary.contact.telephone,
    };
    if (!isEmptyObject(item.openingTimes)) {
      model.openingTimes = new OpeningTimes(item.openingTimes, 'Europe/London');
    }

    viewModels[index] = model;
  });
  return viewModels;
}

module.exports = pharmacyMapper;
