using System;

namespace deligate
{
    class Program
    {
        static void Main(string[] args)
        {

            emailing BYemail = new emailing();
            walking BYwalk = new walking();
            calling BYcall = new calling();
            DelegateDriverClass driverclass = new DelegateDriverClass();
            TaskAssigned task = new TaskAssigned(BYemail.email);
            task += BYwalk.walk;
            task += BYcall.call;
            driverclass.Task(task);

        }
    }
}
