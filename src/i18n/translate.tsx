import React from "react";
import { FormattedMessage } from "react-intl";

const translate = (id: string, defaultMessage?: string, value = {}) =>
	<FormattedMessage id={id} defaultMessage={defaultMessage} values={{ ...value }} />

export default translate;