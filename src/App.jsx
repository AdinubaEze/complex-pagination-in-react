import React,{useState} from 'react'
import {Pagination} from 'antd'
import users from './data.json'
import {HiFilter,HiOutlineRefresh} from 'react-icons/hi'
import {FiMoreVertical,FiSearch} from 'react-icons/fi'


function App() {
  const [page,setPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(10);

  const total = users.length;
  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentUsers = users.slice(indexOfFirstPage,indexOfLastPage);

  const onShowSizeChange =  (current,pageSize) => {
   setPostPerPage(pageSize)
  }

  const itemRender = (current, type,originalEl) =>{
    if(type === "prev"){
     return <span>Previous</span>
    }
    if(type === "next"){
     return <span>Next</span>
    }
    return originalEl;
  }

  return (
    <>
       <main className='container'>
           <div className="wrapper">
              <h3>Users</h3>
              <div className="flex top__container">
                  <div className="flex search__bar">
                     <input type="text" placeholder='Find..' />
                     <span className='flex'><FiSearch/></span>
                  </div>
                  <div className='flex navigation'>
                      <div><HiFilter/> Filter</div>
                      <div><HiOutlineRefresh/> Refresh</div>
                      <div><FiMoreVertical/> More</div>
                  </div>
              </div>

              <div className="content__container">
                 <table className='user__table'>
                   <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Email</th>
                     <th>Phone</th>
                   </tr>
                   {
                    currentUsers.map((user,index)=> (
                      <tr key={index}  className={index % 2 === 0 ? 'tr__variant' : ''}>
                         <td>{user.first_name}</td>
                         <td>{user.last_name}</td>
                         <td>{user.email}</td>
                         <td>{user.phone}</td>
                      </tr>  
                    ))
                   }
                 </table>
              </div>
              <Pagination
               onChange={(value)=>setPage(value)}
               pageSize={postPerPage}
               total={total}
               current={page}
               showSizeChanger
               showQuickJumper
               onShowSizeChange={onShowSizeChange}
               itemRender = {itemRender}
               className={'pagination'}
              />
           </div>
       </main>
    </>
  );
}

export default App;
