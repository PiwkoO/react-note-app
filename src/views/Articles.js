import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate length={articles.length}>
    {articles.map(({ id, title, content, created, articleUrl }) => (
      <Card
        id={id}
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
