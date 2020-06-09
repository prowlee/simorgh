import React, { useContext } from 'react';
import styled from 'styled-components';
import { shape, string, number, bool } from 'prop-types';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_4_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { useLocation } from 'react-router-dom';
import MetadataContainer from '../../containers/Metadata';
import ATIAnalytics from '../../containers/ATIAnalytics';
import ChartbeatAnalytics from '../../containers/ChartbeatAnalytics';
import Grid, { GelPageGrid } from '#app/components/Grid';
import { ServiceContext } from '../../contexts/ServiceContext';
import { RequestContext } from '#contexts/RequestContext';
import OnDemandHeadingBlock from '#containers/RadioPageBlocks/Blocks/OnDemandHeading';
import ParagraphBlock from '#containers/RadioPageBlocks/Blocks/Paragraph';
import AudioPlayerBlock from '#containers/RadioPageBlocks/Blocks/AudioPlayer';
import EpisodeImage from '#containers/RadioPageBlocks/Blocks/OnDemandImage';
import LinkedData from '#containers/LinkedData';
import getMediaId from '#lib/utilities/getMediaId';
import getMasterbrand from '#lib/utilities/getMasterbrand';
import getEmbedUrl from '#lib/utilities/getEmbedUrl';

const SKIP_LINK_ANCHOR_ID = 'content';

const getGroups = (zero, one, two, three, four, five) => ({
  group0: zero,
  group1: one,
  group2: two,
  group3: three,
  group4: four,
  group5: five,
});

const StyledGelPageGrid = styled(GelPageGrid)`
  width: 100%;
  flex-grow: 1; /* needed to ensure footer positions at bottom of viewport */
`;

const StyledGelWrapperGrid = styled(GelPageGrid)`
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding-top: ${GEL_SPACING_TRPL};
  }
`;

const OnDemandRadioPage = ({ pageData }) => {
  const idAttr = SKIP_LINK_ANCHOR_ID;
  const {
    language,
    brandTitle,
    headline,
    summary,
    shortSynopsis,
    masterBrand,
    episodeId,
    episodeIsAvailable,
    releaseDateTimeStamp,
    imageUrl,
    promoBrandTitle,
    durationISO8601,
    thumbnailImageUrl,
  } = pageData;

  const { isAmp } = useContext(RequestContext);
  const location = useLocation();
  const { dir, liveRadioOverrides, lang, service } = useContext(ServiceContext);
  const oppDir = dir === 'rtl' ? 'ltr' : 'rtl';

  const mediaId = getMediaId({
    assetId: episodeId,
    masterBrand: getMasterbrand(masterBrand, liveRadioOverrides),
    lang,
    service,
  });

  const embedUrl = getEmbedUrl({
    mediaId,
    type: 'media',
    isAmp,
    queryString: location.search,
  });

  const audioLinkedData = {
    '@type': 'AudioObject',
    name: promoBrandTitle,
    description: shortSynopsis,
    thumbnailUrl: thumbnailImageUrl,
    duration: durationISO8601,
    uploadDate: new Date(releaseDateTimeStamp).toISOString(),
    embedURL: embedUrl,
  };

  return (
    <>
      <ATIAnalytics data={pageData} />
      <ChartbeatAnalytics data={pageData} />
      <MetadataContainer
        title={headline}
        lang={language}
        description={shortSynopsis}
        openGraphType="website"
      />
      <StyledGelPageGrid
        forwardedAs="main"
        role="main"
        dir={dir}
        columns={getGroups(6, 6, 6, 6, 8, 20)}
        enableGelGutters
      >
        <Grid
          item
          dir={dir}
          startOffset={getGroups(1, 1, 1, 1, 2, 5)}
          columns={getGroups(6, 6, 6, 6, 6, 12)}
          margins={getGroups(true, true, true, true, false, false)}
        >
          <StyledGelWrapperGrid
            dir={oppDir}
            columns={getGroups(6, 6, 6, 6, 6, 6)}
            enableGelGutters
          >
            <Grid dir={dir} item columns={getGroups(6, 6, 4, 4, 4, 4)}>
              <OnDemandHeadingBlock
                idAttr={idAttr}
                brandTitle={brandTitle}
                releaseDateTimeStamp={releaseDateTimeStamp}
              />
              <ParagraphBlock text={summary} />
            </Grid>
            <Grid dir={dir} item columns={getGroups(0, 0, 2, 2, 2, 2)}>
              <EpisodeImage imageUrl={imageUrl} dir={dir} />
            </Grid>
          </StyledGelWrapperGrid>
          <AudioPlayerBlock
            externalId={masterBrand}
            id={episodeId}
            embedUrl={embedUrl}
            episodeIsAvailable={episodeIsAvailable}
          />
          <LinkedData
            type="WebPage"
            seoTitle={headline}
            entities={[audioLinkedData]}
          />
        </Grid>
      </StyledGelPageGrid>
    </>
  );
};

OnDemandRadioPage.propTypes = {
  pageData: shape({
    brandTitle: string,
    headline: string,
    summary: string,
    language: string,
    episodeIsAvailable: bool,
    releaseDateTimeStamp: number,
    imageUrl: string,
  }).isRequired,
};

export default OnDemandRadioPage;