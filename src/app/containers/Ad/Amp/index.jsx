import React, { useContext } from 'react';
import { oneOf } from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import {
  AMP_ACCESS_JS,
  AMP_ADS_JS,
} from '@bbc/psammead-assets/amp-boilerplate';
import {
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
} from '@bbc/gel-foundations/breakpoints';

import { GEL_SPACING_DBL, GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { C_LUNAR_LIGHT, C_RHINO } from '@bbc/psammead-styles/colours';
import pathOr from 'ramda/src/pathOr';
import { getMinion } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { ServiceContext } from '#contexts/ServiceContext';

const FullWidthWrapper = styled.div`
  background-color: ${C_LUNAR_LIGHT};
`;

const StyledWrapper = styled.div`
  margin: 0 auto; /* To centre page layout for Group 4+ */
  text-align: center;
  padding-bottom: ${GEL_SPACING};

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding-bottom: ${GEL_SPACING_DBL};
    max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN};
  }
`;

const StyledAd = styled.div`
  display: inline-block;
`;

const StyledLink = styled.a.attrs({ tabIndex: '-1' })`
  ${({ script }) => script && getMinion(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_RHINO};
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  padding: ${GEL_SPACING} 0;
  
  text-align: ${({ dir }) => (dir === 'ltr' ? `right` : `left`)};

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding-top: ${GEL_SPACING_DBL};
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

const constructAdJsonData = ({ service }) => ({
  targeting: {
    slot: 'leaderboard',
    asset_type: 'index',
    channel: service,
  },
});

const slotConfigurations = {
  leaderboard: {
    mobile: {
      width: '320',
      height: '50',
      adMultiSize: '320x50,300x50',
    },
    desktop: {
      width: '970',
      height: '250',
      adMultiSize: '970x250,728x90',
    },
  },
};

const ampAdProps = ({ viewportType, service, slotType }) => {
  const {
    [viewportType]: { width, height, adMultiSize },
  } = slotConfigurations[slotType];
  return {
    'data-block-on-consent': 'default',
    'data-npa-on-unknown-consent': 'true',
    media: `(max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX})`,
    type: 'doubleclick',
    width,
    height,
    'data-multi-size': adMultiSize,
    'data-slot': '/4817/bbccom.test.site.amp.news',
    'data-amp-slot-index': '0',
    'data-a4a-upgrade-type': 'amp-ad-network-doubleclick-impl',
    json: JSON.stringify(constructAdJsonData({ service })),
  };
};

const AMP_ACCESS_DATA = endpoint => ({
  authorization: endpoint,
  noPingback: true,
  authorizationFallbackResponse: {
    error: true,
  },
});

const LABEL_LINK = 'https://www.bbc.com/usingthebbc/cookies/';

export const AMP_ACCESS_FETCH = service => {
  const togglesEndpoint = `${process.env.SIMORGH_TOGGLES_URL}/toggles?application=simorgh&service=${service}&geoiplookup=true`;

  return (
    <script id="amp-access" type="application/json">
      {JSON.stringify(AMP_ACCESS_DATA(togglesEndpoint))}
    </script>
  );
};

const AmpAd = ({ slotType }) => {
  const { ads, dir, script, service } = useContext(ServiceContext);
  const label = pathOr('Advertisement', ['advertisementLabel'], ads);

  return (
    <div amp-access="toggles.ads.enabled" amp-access-hide="true">
      <FullWidthWrapper>
        <StyledWrapper>
          <Helmet>
            {AMP_ADS_JS}
            {AMP_ACCESS_JS}
            {AMP_ACCESS_FETCH(service)}
          </Helmet>

          <StyledAd>
            <StyledLink
              href={LABEL_LINK}
              script={script}
              service={service}
              dir={dir}
            >
              {label}
            </StyledLink>
            <amp-ad
              {...ampAdProps({ viewportType: 'mobile', service, slotType })}
            >
              <amp-img
                placeholder
                width="320"
                height="50"
                src="https://via.placeholder.com/320x50"
                layout="responsive"
              />
            </amp-ad>
            <amp-ad
              {...ampAdProps({ viewportType: 'desktop', service, slotType })}
            >
              <amp-img
                placeholder
                width="970"
                height="250"
                src="https://via.placeholder.com/970x250"
                layout="responsive"
              />
            </amp-ad>
          </StyledAd>
        </StyledWrapper>
      </FullWidthWrapper>
    </div>
  );
};

AmpAd.propTypes = {
  slotType: oneOf(['leaderboard', 'mpu']).isRequired,
};

export default AmpAd;
