using MeetUpApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MeetUpApp.Context
{
    public class VolunteerContext : DbContext
    {
        public VolunteerContext (DbContextOptions<VolunteerContext> dbContextOptions) : base (dbContextOptions)
        {

        }
        public DbSet<Volunteer> Volunteers { get; set; }
    }
}
