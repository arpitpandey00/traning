using System;
using System.Collections.Generic;
using System.Text;

namespace deligate
{
    public delegate void TaskAssigned();
     public class DelegateDriverClass
    {
        public void Task(TaskAssigned task)
        {
            task();
        }
       
    }
}

