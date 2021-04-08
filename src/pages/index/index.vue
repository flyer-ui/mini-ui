<template>
	<view class="content">
		<br/>
		<m-row>
			<m-col align='left'>
				<m-input type='text'></m-input>
			</m-col>
		</m-row>
		<br/>
		<m-row>
			<m-col align='left'>
				<m-button type='primary'>按钮</m-button>
				<m-button plain type='primary'>按钮</m-button>
				<m-button size='mini' type='primary'>按钮</m-button>
			</m-col>
		</m-row>
		<br/>
		<m-row>
			<m-col>
				<m-swipe-card :data='cards'>
					<template slot-scope="row">
						{{row}}
					</template>
				</m-swipe-card>
			</m-col>
		</m-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				cards:[1,2,3,4]
			}
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style>
	.content {
		margin:20rpx;
	}
</style>
