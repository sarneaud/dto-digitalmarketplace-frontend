import React from 'react';
import classNames from 'classnames';

const LiteHeader = (props) => {

  const {
    name,
    seller_type,
    summary,
    website,
    contact_email,
    contact_phone,
    contact_name
  } = props;

  return (
    <section className="row seller-profile__lite-header">
      <article className="col-xs-12 col-sm-6">
        <h1>{name}</h1>

        <div className="seller-profile__badges">
        {Object.keys(seller_type).map((type, i) => (
          <span key={i} className={classNames(
            'badge--default'
          )}>{type}</span>
        ))}
        </div>

        <div className="seller-profile__summary">
          <p>{summary}</p>
        </div>

        <p>
          <a href={website} target="_blank" rel="external">Visit seller's website</a>
        </p>
      </article>
      <article className="col-xs-12 col-sm-5 col-sm-push-1">
        <p>
          <b>For opportunities contact</b><br/>
          <span>{contact_name}</span>
        </p>
        <p>
          <b>Phone</b><br/>
          <span>{contact_phone}</span>
        </p>
        <p>
          <b>Email</b><br/>
          <a href={`mailto:${contact_email}`}>{contact_email}</a>
        </p>
      </article>
    </section>
  )
}

LiteHeader.propTypes = {
  name: React.PropTypes.string.isRequired,
  seller_type: React.PropTypes.objectOf(React.PropTypes.bool),
  summary: React.PropTypes.string.isRequired,
  website: React.PropTypes.string.isRequired,
  contact_email: React.PropTypes.string.isRequired,
  contact_phone: React.PropTypes.string.isRequired,
  contact_name: React.PropTypes.string.isRequired,
}

export default LiteHeader;