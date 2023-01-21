import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
	return (
		<Stack
			sx={{
				display: 'flex',
				flexDirection: direction || 'row',
				justifyContent: { xs: 'center', md: 'start' },
				flexWrap: 'wrap',
				gap: 2,
			}}
		>
			{videos.map((item, idx) => (
				<Box key={idx}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChannelCard channelDetail={item} />}
				</Box>
			))}
		</Stack>
	);
};

export default Videos;
