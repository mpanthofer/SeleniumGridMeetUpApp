﻿// <auto-generated />
using MeetUpApp.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace MeetUpApp.Migrations
{
    [DbContext(typeof(VolunteerContext))]
    [Migration("20190206073944_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MeetUpApp.Models.Volunteer", b =>
                {
                    b.Property<int>("VKey")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Age");

                    b.Property<string>("Email")
                        .IsRequired();

                    b.Property<string>("Ethnicity")
                        .IsRequired();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("NickName");

                    b.Property<string>("PhoneNumber")
                        .IsRequired();

                    b.HasKey("VKey");

                    b.ToTable("Volunteers");
                });
#pragma warning restore 612, 618
        }
    }
}
