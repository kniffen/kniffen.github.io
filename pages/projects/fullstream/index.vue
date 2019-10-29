<template lang="md">
  FullStream is an alternative and simplified interface for browsing and viewing [Twitch](https://twitch.tv) content.  
  It originated from wanting a solution to watch and browse Twitch at the same time in a full screen environment, hence the name.  
  Since then it has evolved to be more and more feature rich, though development was put on hold from late 2016 until early 2019.  

  <a name="browsing"></a>
  #### Browsing

  When you first visit [FullStream](https://fullstream.kniffen.space) you'll be presented with the current featured and top streams on [Twitch](https://twitch.tv).  
  By using the menu bar on the left you can navigate to other content such as the top [Categories](#categories), top [Videos](#videos), [Search](#search) or [Settings]('settings').  
  If you click on the thumbnail, FullStream will automatically minimize the browsing section and load up the stream and chat depending on your [Settings](#settings).  
  Clicking on the channel's name will take you to that [Channel's](#channels) page and clicking on the [Category](#categories) name will show you other channels streaming under that particular category.  
  There's also some additional information shown under the thumbnail. Such as the stream title, viewer count and amount of time the stream has been live.  

  ![FullStream screenshot streams](/images/projects/fullstream/screenshot-streams.jpg)


  <a name="streams"></a>
  #### Streams

  When watching a stream you'll always have a bar at the top of the screen, this bar shows various information about the stream depending on your [Settings](#settings).  
  On the right side of the bar there's a menu with three icons, by clicking these you call various actions.  
  The speech bubble hides or shows the chat, the burger minimizes the stream and brings back the [Browsing](#browsing) section and the X closes the stream completely.  

  ![FullStream screenshot stream](/images/projects/fullstream/screenshot-stream.jpg)

  <a name="channels"></a>
  #### Channels

  If you click a channel's name anywhere it's displayed you'll be presented with its page.  
  On this page you'll be able to view various information and content associated with the channel, such as panels, videos, clips, events, followers and more.  
  You'll also be able to follow and unfollow the channel, and view it on Twitch in case there's some content that FullStream does not provide such as extentions.  

  ![FullStream screenshot channel](/images/projects/fullstream/screenshot-channel.jpg)

  <a name="Following"></a>
  #### Following

  If you're logged in with your Twitch credentials you'll be able to browse channels and categories you've followed.  
  Unlike Twitch however it doesn't group reruns and premieres together with the live channels, rather it separates them into sections.  
  On the [Settings](#settings) page you can toggle whether to display premieres, reruns, categories and offline channels.  

  ![FullStream screenshot following](/images/projects/fullstream/screenshot-following.jpg)


  <a name="categories"></a>
  #### Categories

  In the categories section you can to browse all the categories on twitch sorted by most popular.  
  If you click on a category you can browse the channels streaming that category, also sorted by most popular.  

  ![FullStream screenshot categories](/images/projects/fullstream/screenshot-categories.jpg)


  <a name="videos"></a>
  #### Videos

  In the videos section you can browse the current top videos on twitch, this does not include clips however.  
  By clicking on a video you can view it similar to how a [stream](#streams) is viewed.

  ![FullStream screenshot videos](/images/projects/fullstream/screenshot-videos.jpg)


  <a name="search"></a>
  #### Search

  In this section you can search for live streams, users or categories.  

  ![FullStream screenshot search](/images/projects/fullstream/screenshot-search.jpg)



  <a name="settings"></a>
  #### Settings

  The settings area is divided into sections, some may not be visible depending on if you're logged in with Twitch or not.  
  A general setting for basic stuff, a following section to toggle visibility of various sub sections on the [Following](#following) page, stream details to toggle various information on the top bar and streams pages, and a section for managing channels you are following.  

  ![FullStream screenshot settings](/images/projects/fullstream/screenshot-settings.jpg)

  <center>
    <h4>Try it our at</h4>
    <a href="https://fullstream.kniffen.space" target="_blank"><h1 style="margin: 0;">fullstream.kniffen.space</h1></a>
  </center>
</template>

<script>
  export default {
    
    name: 'FullStream',

  }
</script>