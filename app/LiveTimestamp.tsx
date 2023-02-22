'use client'

import TimeAgo from 'react-timeago';
import React from 'react'

type Props = {
    time: string;
};

function LiveTimestamp({time}: Props) {
  return (
    <TimeAgo date={time} />
  )
}

export default LiveTimestamp