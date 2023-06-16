'use client';

import { useState, useEffect} from 'react';

import PromptCard from './PromptCard';

const PromptCardList =({ data, handleTagClick}) => {
  return(
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick= {handleTagClick}
        />
        ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText ] = useState('');
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
        type="text"
        placeholder="Search for tag or a username"
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
        />
      </form>
     
        <PromptCardList data={allPosts.filter((item) => {

        return(
          searchText.toLowerCase() === '' 
          ? item
          : item.tag.toLowerCase().includes(searchText) 
          || item.creator.username.toLowerCase().includes(searchText)
          || item.prompt.toLowerCase().includes(searchText)
        )
      })} 
      handleTagClick={(e) => {
        setSearchText(e)
      }}
      />
    </section>
  )
}

export default Feed